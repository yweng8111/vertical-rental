# Part of rental-vertical See LICENSE file for full copyright and licensing details.

from dateutil.relativedelta import relativedelta

from odoo.addons.rental_base.tests.stock_common import RentalStockCommon
from odoo import fields
from odoo.exceptions import ValidationError


class TestRentalProductInstance(RentalStockCommon):
    def setUp(self):
        super(TestRentalProductInstance,self).setUp()

        # Product A Created
        company = self.env.ref('base.main_company')
        ProductObj = self.env["product.product"]
        self.productA = ProductObj.create({"name": "Product A", "type": "consu"})
        self.serialNumberA = self.env["stock.production.lot"].create(
            {
                "name": "Serial Number A",
                "product_id": self.productA.id,
                "company_id": company.id,
            }
        )
        self.date_start = fields.Date.from_string(fields.Date.today())
        self.date_end = self.date_start + relativedelta(days=1)

    def test_00_template_onchange_product_intance_tracking(self):
        self.productA.write(
            {
                "product_instance": True,
            }
        )
        self.productA.product_tmpl_id.onchange_product_instance()
        self.assertEqual(self.productA.tracking, "serial")
        self.assertEqual(self.productA.type, "product")

        self.productA.write(
            {
                "tracking": "lot",
            }
        )
        self.productA.product_tmpl_id.onchange_tracking()
        self.assertEqual(self.productA.product_instance, False)

    def test_01_onchange_product_intance_tracking(self):
        self.productA.write(
            {
                "product_instance": True,
            }
        )
        self.productA.onchange_product_instance()
        self.assertEqual(self.productA.tracking, "serial")
        self.assertEqual(self.productA.type, "product")

        self.productA.write(
            {
                "tracking": "lot",
            }
        )
        self.productA.onchange_tracking()
        self.assertEqual(self.productA.product_instance, False)

    def test_02_instance_current_location(self):
        self.productA.write(
            {
                "product_instance": True,
                "instance_serial_number_id": self.serialNumberA.id,
            }
        )
        self.productA.onchange_product_instance()
        # try create 2nd. serial number for productA
        with self.assertRaises(ValidationError):
            self.serialNumberB = self.env["stock.production.lot"].create(
                {
                    "name": "Serial Number B",
                    "product_id": self.productA.id,
                    "company_id": self.serialNumberA.company_id.id,
                }
            )

        # create quant
        self.env["stock.quant"].create(
            {
                "product_id": self.productA.id,
                "location_id": self.stock_location.id,
                "lot_id": self.serialNumberA.id,
                "quantity": 1.0,
            }
        )
        self.assertEqual(
            self.env["stock.quant"]._get_available_quantity(
                self.productA, self.stock_location
            ),
            1.0,
        )

        move = self._create_move(
            self.productA,
            self.stock_location,
            self.customer_location,
            product_uom_qty=1,
            product_uom=self.uom_unit.id,
            picking_type_id=self.picking_type_out.id,
        )
        # TODO check why does function _action_done not change the state of move
        ## assign move and do move
        # move._action_confirm()
        # move._action_assign()
        # move._action_done()
        # move.picking_id.button_validate()
        # self._print_move(move)
        move.write({"state": "done"})
        self.assertEqual(
            self.productA.instance_current_location_id, self.customer_location
        )
