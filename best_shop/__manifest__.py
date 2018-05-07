{
    'name': "best_shop",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'website': "http://www.yourcompany.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/master/odoo/addons/base/module/module_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web', 'website', 'website_sale', 'mass_mailing', 'website_blog'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'views/products.xml',
        'views/about.xml',
        'views/bread.xml',
        'views/checkout.xml',
        'views/drinks.xml',
        'views/events.xml',
        'views/faqs.xml',
        'views/frozen.xml',
        'views/household.xml',
        'views/index.xml',
        'views/kitchen.xml',
        'views/login.xml',
        'views/mail.xml',
        'views/payment.xml',
        'views/pet.xml',
        'views/privacy.xml',
        'views/services.xml',
        'views/short-codes.xml',
        'views/single.xml',
        'views/vegetables.xml',

    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
}
