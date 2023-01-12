odoo.define('contract_toll_collect.tour', function (require) {
    "use strict";

    var core = require('web.core');
    var tour = require('web_tour.tour');

    var _t = core._t;
    var _wait = "1000";

    tour.register('contract_toll_collect_tour', {
        url: "/web",
        }, [tour.stepUtils.showAppsMenuItem(), {
            content: _t('Go to main menu Rental'),
            trigger: '.o_app[data-menu-xmlid="rental_base.menu_rental_root"]',
            position: 'bottom',
            width: 200
        },
        {
            content: _t('Go to top menu of Customer'),
            trigger: 'li a[data-menu-xmlid="rental_base.menu_top_customer"]',
            position: 'bottom',
            // extra_trigger: '.o_main_navbar a:contains("Rental")',
        },
        {
            content: _t('Go to menu Rental Orders'),
            trigger: 'a[data-menu-xmlid="rental_base.menu_rental_orders"]',
            position: 'bottom'
        },
        {
            content: _t("Let's create new Rental Order."),
            trigger: '.o_list_button_add',
            position: 'bottom',
            // extra_trigger: '.o_content .o_view_controller',
        },
        {
            content: _t("Create or select Customer"),
            trigger: ".o_form_editable .o_field_many2one[name='partner_id'] .o_input_dropdown input",
            position: "bottom",
            run: 'click'
        },
        {
            trigger: 'li a:contains("Azure Interior")',
            in_modal: false,
            extra_trigger: 'ul.ui-autocomplete',
            run: 'click'
        },
        {
            content: _t('Set default_start_date to 08/01/2020'),
            trigger: '.o_form_editable .o_datepicker_input[name="default_start_date"]',
            run: 'text 08/01/2020',
            position: 'bottom',
        },
        {
            content: _t('Set default_end_date to 08/31/2020'),
            trigger: '.o_form_editable .o_datepicker_input[name="default_end_date"]',
            run: 'text 08/31/2020',
            position: 'bottom',
        },
        {
            content: _t("Click here to create or add Product"),
            trigger: "a:contains('Add a product')",
            position: "bottom",
        },
        {
            trigger: ".o_field_many2one[name='display_product_id'] .o_input_dropdown input",
            run: 'click'
        },
        {
            trigger: 'li a:contains("Volvo L80H")',
            in_modal: false,
            extra_trigger: 'ul.ui-autocomplete',
            run: 'click'
        },
        {
            trigger: ".o_field_many2one[name='product_uom'] .o_input_dropdown input",
            extra_trigger: ".o_field_many2one[name='display_product_id'] .o_external_button",
            run: 'click'
        },
        {
            trigger: 'li a:contains("Month(s)")',
            in_modal: false,
            extra_trigger: 'ul.ui-autocomplete',
            run: 'click'
        },
        {
            content: _t('Click on Save & Close'),
            trigger: 'button span:contains(Save & Close)',
            extra_trigger: '.o_act_window',
            run: 'click',
            position: 'bottom',
        },
        {
            content: _t('Check Ordered Qty'),
            trigger: 'td.o_data_cell:contains("1.00")',
            extra_trigger: 'div[name="order_line"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Ordered Qty: 1 = diff(08/31/2020 - 08/01/2020) Month(s)
        },
        {
            content: _t('Check Unit of measure'),
            trigger: 'td.o_data_cell:contains("Month(s)")',
            extra_trigger: 'div[name="order_line"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Unit of measure : Month(s)
        },
        {
            content: _t('Check Unit Price'),
            trigger: 'td.o_data_cell:contains("4,500.00")',
            extra_trigger: 'div[name="order_line"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Unit Price : 4,500.00
        },
        {
            content: _t('Save Rental Order'),
            trigger: '.o_form_button_save',
            position: 'bottom',
        },
        {
            content: _t("Click on line to"),
            trigger: "tr.o_data_row",
            extra_trigger: 'div.o_form_readonly',
            run: 'click',
            position: "bottom",
        },
        {
            content: _t('Check End Date'),
            trigger: 'span[name="end_date"]:contains("08/31/2020")',
            in_modal: false,
            position: 'bottom',
            run: function (){
                if ($('span[name="date_end"]:contains("08/31/2020")').length) {
                    console.log('Check date_end successfully.');
                } else {
                    console.error('Check date_end unsuccessfully');
                }
            } //check End Date = Date End 08/31/2020 (#3748)
        },
        {
            content: _t('Click Button Close'),
            trigger: '.o_form_button_cancel',
            in_modal: false,
        },
        {
            content: _t("Click Send by email"),
            trigger: 'button[name="action_quotation_send"]:visible:not(:disabled)',
        },
        {
            content: _t("Click Send"),
            extra_trigger: '.o_act_window',
            trigger: '.btn[name="action_send_mail"]',
        },
        {
            content: _t("Click Confirm"),
            extra_trigger: '.o_statusbar_status .btn-primary:contains("Quotation Sent")',
            trigger: 'button[name="action_confirm"]:visible:not(:disabled)',
        },
        {
            content: _t('Check Toll Line count'),
            trigger: 'button[name="action_view_product_toll_charges"] span[name="toll_line_count"]:contains("17")',
            extra_trigger: 'div[name="order_line"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Line count : 17
        },
        {
            content: _t('Check Toll Line Charged count'),
            trigger: 'button[name="action_view_product_toll_charges"] span[name="toll_line_charged_count"]:contains("0")',
            extra_trigger: 'div[name="order_line"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Line Charged count : 0
        },
        {
            content: _t("Click on Contracts"),
            trigger: 'button[name="action_show_contracts"]',
            extra_trigger: '.o_statusbar_status .btn-primary:contains("Sales Order")'
        },
        {
            content: _t('Check Contract Type'),
            trigger: '.o_form_view span[name="contract_type"]:contains("Customer")',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Contract: Contract Type = Customer
        },
        {
            content: _t('Check Contract Subtype'),
            trigger: '.o_form_view a[name="type_id"]:contains("Rental Contract")',
            extra_trigger: 'div[name="contract_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Contract: Contract Subtype = Rental Contract
        },
        {
            content: _t('Check Analytic Account on Contract'),
            trigger: 'td.o_data_cell:contains("[01535] Volvo L80H")',
            extra_trigger: 'div[name="contract_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Contract: (Analytic Account : [01535] Volvo L80H)
        },
        {
            content: _t('Check Date of Next Invoice'),
            trigger: '.o_form_view span[name="recurring_next_date"]:contains("08/01/2020")',
            extra_trigger: 'div[name="contract_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Contract: Date of Next Invoice = 08/01/2020
        },
        {
            content: _t('Check Date Start on contract line'),
            trigger: 'td.o_data_cell:contains("08/01/2020")',
            extra_trigger: 'div[name="contract_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Contract Line: Date Start = 08/01/2020
        },
        {
            content: _t('Check Date End on contract line'),
            trigger: 'td.o_data_cell:contains("08/31/2020")',
            extra_trigger: 'div[name="contract_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Contract Line: Date End = 08/31/2020
        },
        {
            content: _t("Use the breadcrumbs to go back to your Rental Order."),
            trigger: ".breadcrumb-item:not(.active):last",
            extra_trigger: '.o_form_view',
            position: "bottom"
        },
        {
            content: _t("Click on Delivery"),
            trigger: 'button[name="action_view_delivery"]',
            extra_trigger: '.o_form_view',
        },
        {
            content: _t('Check Outgoing Delivery'),
            trigger: 'td.o_data_cell:contains("WH/OUT/")',
            extra_trigger: '.o_list_view',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check there must be OUT deleivery
        },
        {
            content: _t('Check Incoming Delivery'),
            trigger: 'td.o_data_cell:contains("WH/IN/")',
            extra_trigger: '.o_list_view',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check there must be IN deleivery
        },
        {
            content: _t('Click on Outgoing Delivery'),
            trigger: 'td.o_data_cell:contains("WH/OUT/")',
            extra_trigger: '.o_list_view',
            position: 'bottom',
            run: 'click',
        },
        {
            content: _t("Click on Validate"),
            trigger: 'button[name="button_validate"]',
        },
        {
            content: _t('Click on Apply'),
            trigger: 'button span:contains("Apply")',
            extra_trigger: '.o_act_window',
            id: "rental_product_out",
            run: 'click',
            position: 'bottom',
        },
        {
            content: _t('Check Done Quantity'),
            trigger: 'td.o_data_cell:contains("1.000")',
            extra_trigger: 'div[name="move_ids_without_package"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Done: 1.0 Unit(s)
        },
        {
            content: _t("Use the breadcrumbs to <b>go back to Rental Order</b>."),
            trigger: ".breadcrumb-item:not(.active):nth-last-child(3)",
            extra_trigger: '.o_form_view',
            position: "bottom"
        },
        // START: set automatic_toll_charge_invoicing = True
        // {
        //     content: _t('Go to menu of Rental > Configuration'),
        //     trigger: 'li a[data-menu-xmlid="rental_base.menu_config"]',
        //     extra_trigger: 'a.o_menu_brand:contains("Rentals")',
        //     position: 'bottom'
        // },
        // {
        //     content: _t('Go to menu of Rental > Configuration > Settings'),
        //     trigger: 'li a[data-menu-xmlid="rental_base.menu_settings"]',
        //     position: 'bottom',
        // },
        // {
        //     content: _t('Set automatic invoicing of toll charges to True'),
        //     trigger: 'div.o_field_boolean[name="automatic_toll_charge_invoicing"] input[type="checkbox"]',
        //     extra_trigger: 'button[name="execute"]:visible:not(:disabled)',
        //     run: function (){
        //           var check_value = $('div.o_field_boolean[name="automatic_toll_charge_invoicing"] input[type="checkbox"]').prop("checked");
        //           if (!check_value){
        //             $('div.o_field_boolean[name="automatic_toll_charge_invoicing"] input[type="checkbox"]').prop("checked", true);
        //             $('div.o_field_boolean[name="automatic_toll_charge_invoicing"] input[type="checkbox"]').trigger('change');
        //           }
        //       },
        // },
        // {
        //     content: _t('Click on Save'),
        //     trigger: '.o_statusbar_buttons button[name="execute"]',
        //     position: 'bottom',
        //     extra_trigger: 'button[name="execute"]:visible:not(:disabled)',
        // },
        // {
        //     content: "Save complete and Redirect to /web",
        //     trigger: '.o_control_panel:contains("Settings")',
        //     extra_trigger: 'button[name="execute"]:visible:not(:disabled)',
        //     run: function () {
        //         window.location.href = '/web';
        //     },
        // },
        // {
        //     content: "Wait page loaded",
        //     trigger: '.o_main_navbar a:contains("Discuss")',
        //     in_modal: false,
        //     extra_trigger: '.o_main_navbar a:contains("Discuss")',
        //     timeout: 30000,
        //     run: function () {}, // it's a check
        // },
        // {
        //     content: _t('Go to main menu Rental'),
        //     trigger: '.mk_apps_sidebar [data-menu-xmlid="rental_base.menu_rental_root"] > .mk_apps_sidebar_name',
        //     extra_trigger: 'a.o_menu_brand:contains("Discuss")',
        //     position: 'bottom',
        //     width: 200,
        //     timeout: 30000,
        // },
        // {
        //     content: _t('Go to main menu of Rental'),
        //     trigger: '.mk_apps_sidebar li a[data-menu-xmlid="rental_base.menu_rental_root"]',
        //     extra_trigger: 'a.o_menu_brand:contains("Discuss")',
        //     position: 'bottom',
        // },
        // {
        //     content: _t('Go to top menu of Customer'),
        //     trigger: 'li a[data-menu-xmlid="rental_base.menu_top_customer"]',
        //     extra_trigger: 'a.o_menu_brand:contains("Rentals")',
        //     position: 'bottom'
        // },
        // {
        //     content: _t('Go to menu Rental Orders'),
        //     trigger: 'a[data-menu-xmlid="rental_base.menu_rental_orders"]',
        //     position: 'bottom'
        // },
        // {
        //     content: _t('Click on Rental Order who has 08/01/2020'),
        //     trigger: 'table.o_list_view tbody tr:first-child',
        //     extra_trigger: '.o_list_view',
        //     position: 'bottom',
        //     run: 'click',
        // },
        // END
        {
            content: _t("Click on Contracts"),
            trigger: 'button[name="action_show_contracts"]',
            extra_trigger: '.o_statusbar_status .btn-primary:contains("Sales Order")',
        },
        tour.stepUtils.showAppsMenuItem(),
        {
            content: _t('Go to menu of Settings'),
            trigger: 'li a[data-menu-xmlid="base.menu_administration"]',
            position: 'bottom',
        },
        {
            content: _t('Click on Activate the developer mode'),
            trigger: 'div.form-row a:contains("Activate the developer mode")',
            extra_trigger: 'a.o_menu_brand:contains("Settings")',
            position: 'bottom',
        },
        {
            content: _t('Go to main menu'),
            trigger: '.o_menu_apps a',
            extra_trigger: '.o_main_navbar a.o_menu_brand:contains("Discuss")',
            auto: true,
            position: "bottom",
        },
        {
            content: _t('Go to main menu of Rental'),
            trigger: '.o_app:contains("Rentals")',
            trigger: '.o_app[data-menu-xmlid="rental_base.menu_rental_root"]',
            position: 'bottom',
        },
        // {
        //     content: _t('Go to main menu of Rental'),
        //     trigger: '.mk_apps_sidebar li a[data-menu-xmlid="rental_base.menu_rental_root"]',
        //     extra_trigger: 'a.o_menu_brand:contains("Discuss")',
        //     position: 'bottom',
        // },
        {
            content: _t('Go to top menu of Customer'),
            trigger: 'li a[data-menu-xmlid="rental_base.menu_top_customer"]',
            extra_trigger: 'a.o_menu_brand:contains("Rentals")',
            position: 'bottom'
        },
        {
            content: _t('Go to menu Rental Orders'),
            trigger: 'a[data-menu-xmlid="rental_base.menu_rental_orders"]',
            position: 'bottom'
        },
        // Here click on first record of rental order which is our record of this tour
        {
            content: _t('Click on Rental Order who has 08/01/2020'),
            trigger: 'table.o_list_view tbody tr:first-child',
            extra_trigger: '.o_list_view',
            position: 'bottom',
            run: 'click',
        },
        {
            content: _t("Click on Contracts"),
            trigger: 'button[name="action_show_contracts"]',
            extra_trigger: '.o_statusbar_status .btn-primary:contains("Sales Order")',
        },
        {
            content: _t("Click on Create Invoice"),
            trigger: 'button[name="recurring_create_invoice"]',
            extra_trigger: '.o_form_view',
        },
        {
            content: _t('Click on Invoices'),
            trigger: 'button[name="action_show_invoices"]',
            extra_trigger: 'div[name="invoice_count"] span.o_stat_value:contains("1")',
            run: 'click',
            position: 'bottom',
        },
        {
            content: _t('Check status of Invoice which is created on 08/01/2020'),
            trigger: 'td.o_data_cell:contains("Draft")',
            extra_trigger: '.o_list_view',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice: Status = Draft
        },
        {
            content: _t('Click on Invoice from list which is created on 08/01/2020'),
            trigger: 'td.o_data_cell:contains("08/01/2020")',
            extra_trigger: '.o_list_view',
            position: 'bottom',
            run: 'click',
        },
        {
            content: _t('Check Sale Type on Invoice'),
            trigger: '.o_invoice_form a[name="sale_type_id"]:contains("Rental Order")',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice: Sale Type = Rental Order
        },
        {
            content: _t('Check Toll Line count'),
            trigger: 'button[name="action_view_product_toll_charges"] span[name="toll_line_count"]:contains("17")',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Line count : 17
        },
        {
            content: _t('Check Toll Line Charged count'),
            trigger: 'button[name="action_view_product_toll_charges"] span[name="toll_line_charged_count"]:contains("17")',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Line Charged count : 17
        },
        {
            content: _t('Check total rental time on Invoice line'),
            trigger: 'td.o_data_cell:contains("1.00")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice Line: (Rental Time : 1 months)
        },
        {
            content: _t('Check Unit of measure on Invoice line'),
            trigger: 'td.o_data_cell:contains("Month(s)")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice Line: (Uom : Month(s))
        },
        {
            content: _t('Check Unit Price on Invoice line'),
            trigger: 'td.o_data_cell:contains("4,500.00")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice Line: (Unit Price : 4,500.00)
        },
        {
            content: _t('Check Date Start on Invoice line'),
            trigger: 'td.o_data_cell:contains("08/01/2020")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice Line: Date Start = 08/01/2020
        },
        {
            content: _t('Check Date End on Invoice line'),
            trigger: 'td.o_data_cell:contains("08/31/2020")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice Line: Date End = 08/31/2020
        },
        {
            content: _t('Check Analytic Account on Invoice Line'),
            trigger: 'td.o_data_cell:contains("[01535] Volvo L80H")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Invoice Line: (Analytic Account : [01535] Volvo L80H)
        },
        {
            content: _t('Check Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) > .o_data_cell:contains("Toll Charges")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Product : Toll Charges)
        },
        {
            content: _t('Check Description of Toll Charge product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) > .o_data_cell span[name="name"]:contains("Toll Charges for BNA 1535 Total Distance: 262.4 km")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Description : Toll Charges for BNA 1535 Total Distance: 262.4 km)
        },
        {
            content: _t('Check Analytic Account of Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) > .o_data_cell:contains("[01535] Volvo L80H")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Analytic Account : [01535] Volvo L80H)
        },
        {
            content: _t('Check Quantity of Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) .o_data_cell:contains("1.00")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Quantity : 1.0)
        },
        {
            content: _t('Check Unit of Measure of Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) .o_data_cell:contains("Unit(s)")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Unit of Measure : Unit(s))
        },
        {
            content: _t('Check Price of Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) .o_data_cell:contains("45.40")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Price : 45.40)
        },
        {
          content: _t('Click on Smart Button Toll Lines'),
          trigger: 'button[name="action_view_product_toll_charges"]',
          extra_trigger: '.o_form_view',
          run: 'click'
        },
        {
            content: _t('Click on first record from list of Toll charge lines'),
            trigger: '.o_data_row:nth-child(1) td.o_data_cell:contains("08/28/2020")',
            extra_trigger: '.o_list_view',
            position: 'bottom',
            run: 'click', //Toll Charge Line: (Charge Amount : 0.03, Distance = 0.20km)
        },
        {
            content: _t('Edit Selcted Toll Charge Line'),
            trigger: '.o_form_button_edit',
            position: 'bottom',
        },
        {
            content: _t("Set False to Chargeable?"),
            trigger: '.o_form_sheet div[name="chargeable"] input',
            extra_trigger: '.o_form_sheet',
            run: function (){
                $('.o_form_sheet div[name="chargeable"] input').attr('checked', false);
                $('.o_form_sheet div[name="chargeable"] input').trigger('change');
            }
        },
        {
          trigger: '.o_form_button_save',
          content: _t('Save the Toll Charge Line'),
          run: 'click'
        },
        {
            content: _t("Use the breadcrumbs to go back to Invoice."),
            trigger: ".breadcrumb-item:not(.active):nth-last-child(3)",
            extra_trigger: '.o_form_view',
            position: "bottom"
        },
        {
          trigger: 'button[name="action_update_toll_charges"]',
          content: _t('Update Toll Charges'),
          run: 'click'
        },
        {
            content: _t('Check Toll Line count'),
            trigger: 'button[name="action_view_product_toll_charges"] span[name="toll_line_count"]:contains("17")',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Line count : 17
        },
        {
            content: _t('Check Toll Line Charged count'),
            trigger: 'button[name="action_view_product_toll_charges"] span[name="toll_line_charged_count"]:contains("16")',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Line Charged count : 16
        },
        {
            content: _t('Check Unit of Measure of Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) .o_data_cell:contains("Unit(s)")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Unit of Measure : Unit(s))
        },
        {
            content: _t('Check Price of Toll Charge Product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) .o_data_cell:contains("45.37")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Price : 45.37 = 45.40 - 0.03)
        },
        {
            content: _t('Check Description of Toll Charge product on Invoice Line'),
            trigger: '.o_data_row:nth-child(2) > .o_data_cell span[name="name"]:contains("Toll Charges for BNA 1535 Total Distance: 262.2 km")',
            extra_trigger: 'div[name="invoice_line_ids"]',
            in_modal: false,
            position: 'bottom',
            run: function (){} //check Toll Charge Product on Invoice Line: (Description : Toll Charges for BNA 1535 Total Distance: 262.2 km)
        },
        // /*{
        //     content: _t('Click on Validate'),
        //     trigger: 'button[name="action_invoice_open"]',
        //     position: 'bottom',
        // },*/
        {
            content: _t('Go to Overview'),
            trigger: 'li a[data-menu-xmlid="rental_timeline.menu_overview"]',
            position: 'bottom'
        },
    ]);
});
