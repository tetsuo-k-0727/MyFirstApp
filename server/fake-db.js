const Product = require('./model/product')

class FakeDb{

    constructor(){
        this.products = [{
            name: 'Phone XL',
            price: 799,
            description: 'A large phone with one of the best screens',
            heading1: 'サンプルテキスト1',
            heading2: 'サンプルテキスト2',
            heading3: 'サンプルテキスト3',
            headingtext1: "テスト　テスト　テスト",
            headingtext2: "text text text",
            hedaingtext3: "test test test"
          },
          {
            name: 'Phone Mini',
            price: 699,
            description: 'A great phone with one of the best cameras',
            heading1: 'サンプルテキスト1',
            heading2: 'サンプルテキスト2',
            heading3: 'サンプルテキスト3',
            headingtext1: "テスト　テスト　テスト",
            headingtext2: "text text text",
            hedaingtext3: "test test test"
          },
          {
            name: 'Phone Standard',
            price: 299,
            description: '',
            heading1: 'サンプルテキスト1',
            heading2: 'サンプルテキスト2',
            heading3: 'サンプルテキスト3',
            headingtext1: "テスト　テスト　テスト",
            headingtext2: "text text text",
            hedaingtext3: "test test test"
          },
          {
            name: 'Phone Special',
            price: 999,
            description: '',
            heading1: 'サンプルテキスト1',
            heading2: 'サンプルテキスト2',
            heading3: 'サンプルテキスト3',
            headingtext1: "テスト　テスト　テスト",
            headingtext2: "text text text",
            hedaingtext3: "test test test"
          }]
    }

    //データベースを初期化
    async initDb(){
        await this.cleanDb()
        this.seeDb()
    }

    //データベースの中身を削除
    async cleanDb(){
        await Product.deleteMany({})
    }

    //データベースへの登録
    pushProductsDb(){
        this.products.forEach(
            (product) => {
                const newProduct = new Product(product)
                newProduct.save()
            }
        )
    }

    //59行目のメソッドの呼び出し
    seeDb(){
        this.pushProductsDb()
    }

}

module.exports = FakeDb