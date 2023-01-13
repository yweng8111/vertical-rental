# Part of rental-vertical See LICENSE file for full copyright and licensing details.

{
    "name": "Rental Product Variant",
    "summary": "Extends model product with several fields for rental use cases.",
    "description": """
This module adds several fields to the product form.

Additional fields:
 - further_ref [Char]: additional reference
 - qr_code [Char]: QR code
 - manu_year [Char]: year of manufacture
 - manu_id [Many2one]: product.manufacturer -- manufacturer
 - manu_type_id [Many2one]: product.manufacturer.type -- type
 - fleet_type_id [Many2one]: fleet.type -- fleet type

 - rental_order_ids [One2many]: sale.rental -- rented_product_id -- Rental Orders
 - stock_move_ids [One2many]: stock.move -- product_id -- Stock Moves
 - additional_info [Html]: arbitrary additional infomation

Additional fields configured and added by product category:
 - Show Product Identification Number -> product_number [Char]: product identification number
 - Show Vehicle Identification Number -> vehicle_number [Char]: vehicle identification number
 - Show License Plate -> license_plate [Char]: license plate
 - Show Initial Registration -> init_regist [Date]: date of initial registration
""",
    "usage": """
In order to get vehicle related fields, open the product category and activate the desired checkboxes.
""",
    "version": "14.0.1.1.0",
    "category": "Rental",
    "author": "Odoo Community Association (OCA)/Elego Software Solutions GmbH",
    "depends": [
        "rental_base",
        "purchase_order_type",
        "product_dimension",
    ],
    "data": [
        "security/ir.model.access.csv",
        "views/product_view.xml",
        "views/account_invoice_view.xml",
        # "views/purchase_order_view.xml",
    ],
    "demo": [],
    "qweb": [],
    "application": False,
    "license": "AGPL-3",
}
