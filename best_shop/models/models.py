# -*- coding: utf-8 -*-

from odoo import models, fields, api

class Course(models.Model):
    _name = 'best_shop'

    name = fields.Char(string="Title", required=True)
    description = fields.Text()

# class website_vuabia(models.Model):
#     _name = 'website_vuabia.website_vuabia'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100