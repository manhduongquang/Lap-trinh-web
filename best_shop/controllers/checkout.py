from odoo import http
# from odoo.http import request


class AccountPageController(http.Controller):

    @http.route('/checkout', website=True, type='http', auth='public')
    def account(self, **kw):
        return http.request.render('best_shop.checkout', {})


