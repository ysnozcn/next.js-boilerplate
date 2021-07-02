const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");

const config = {
  ...nextTranslate(),
  async rewrites() {
    return [
      {
        source: "/hospitals",
        destination: "/institutions",
      },
      {
        source: "/clinics",
        destination: "/institutions",
      },
      {
        source: "/clinics-and-hospitals",
        destination: "/institutions",
      },
      {
        source: "/hospitals/:path*",
        destination: "/institutions/:path*",
      },
      {
        source: "/clinics/:path*",
        destination: "/institutions/:path*",
      },
      {
        source: "/clinics-and-hospitals/:path*",
        destination: "/institutions/:path*",
      },
      {
        // does not handle locales automatically since locale: false is set
        source: "/fr/about-fr",
        destination: "/fr/about",
        locale: false,
      },
      {
        // does not handle locales automatically since locale: false is set
        source: "/de/about-de",
        destination: "/de/about",
        locale: false,
      },
    ];
  },
  env: {
    apiUrl: 'http://localhost/hospitalservice/public/api/',
    token: "Bearer " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiZjNiNjEzY2Q0OGMwNjM1ZjY5ZjI2NjZhYjE2NGIyOTI1NzRmMTA0OTRmNDQ2ZGRmYjhkZDg4ZGU5NjVjZTUyODE4NjljNGNlNGVlMjQ1MmIiLCJpYXQiOjE2MjQzODc4ODksIm5iZiI6MTYyNDM4Nzg4OSwiZXhwIjoxNjI0NDMxMDg4LCJzdWIiOiIzIiwic2NvcGVzIjpbXX0.kELFY3GeeEw-F-ktG203ogE42Z2yqQwiYUllyEF5rXCkMio2XMo4hoOQKIz732Vk-1Vkd0m8PcvcEjEFXWDCRY1PyD-H2HCUo3skM7Jn4plfb_hI2vOfPgC_-g8nJwzuC_11v9O0Qsy0D7RH5RYkk0me9aYQq4fFSFa5HIkjg-gei58eRkiQqB4eJyMS1wF_5-mSUHp2pqh_t28Ri_pdXz-dIsuwaCA4L2974Ziu1x2cd0uMGJTvwHcW7ZwR09FnLyEoX6V6Bb6jP87MbkdRshKvyFbHrTBSLI5iDXM6jrzl4fpkNaB4tp2WPVb8WpUyvH1l320NNweilCr2cN9LWV0YNh0AAVV0Zr60-n7GO2ovo7pKC9Vi5pKGcnw_M47lDh72tghsvgfESWcDczMzd8Qnj9jY8QQ5c3h-3AxxvgipxO_EUnQvLEWjy58IlKKsPWWomc0Cz6pA9m8Kwf0Y-tpE9eCjkvCrLR7uSyOcdmN7m-4oXacGhanvLACUmpgIEICZ2hwX5LstaIzIH1l4tbDlGHDzMuu_CyNblDf49RObAoYAC4_mu1YIR0EjyKq0JY6hQwOR8HU6rYybGjQQZMaSMF_FTfKUyKeL3KRMMTxnl1jHurc9up2WsvntZfOI7_t8OdHXqIQd5Rra5W51N1gK1GmttCSB7nu-gmPI0jg',
  },
};

module.exports = withPlugins([], config);
