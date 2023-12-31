# Generated by Django 2.2.4 on 2023-07-26 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('StockMaster_app', '0003_auto_20230726_1831'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='p_barcode',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='order_list',
            name='p_barcode',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='order',
            name='products',
            field=models.CharField(max_length=255),
        ),
        migrations.AlterField(
            model_name='order_list',
            name='products',
            field=models.CharField(max_length=255),
        ),
    ]
