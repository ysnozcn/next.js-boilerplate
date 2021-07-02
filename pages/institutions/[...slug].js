import React, { Fragment, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'
import useTranslation from "next-translate/useTranslation";

const Institutions = (props) => {
  const router = useRouter();
  const { locale, locales, query } = router;
  const { posts } = props;
  const { t } = useTranslation();

  return (
    <Fragment>
      <div>test</div>
      <h1>Hospitals</h1>
      <h1>{t("common:greeting")}</h1>
      <div>{locale}</div>
      <div>{locales} </div>
      <div>{query.slug} </div>

      <div>
        <ul>
          {router.locales.map((locale) => (
            <li key={locale}>
              <Link href={router.asPath} locale={locale}>
                <a>{locale}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      <pre>{JSON.stringify(posts)}</pre>
      {posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </Fragment>
  );
}


async function getData(params) {
  return await fetch("https://jsonplaceholder.typicode.com/posts", {
    headers: { "Accept-Language": params.locale },
  }).then((response) => response.json());
}

export async function getServerSideProps(params) {
  const data = await getData({ params });
  // const ids = data.map((post: unknown) => post.id);
  return {
    props: {
      posts: data,
    },
  };

  // useEffect(() => {
  //     const dispatch = useDispatch();
  //     dispatch(HospitalActions.GetHospitals(params));
  // }, []);

  // const dispatch = useDispatch();
  // dispatch(HospitalActions.GetHospitals(params));

  // const initialState = HospitalActions.GetHospitals("ss");

  // return {
  //   props: { initialState },
  // };
}


export default Institutions;