import { Layout, Page, Card, List } from "@shopify/polaris";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "~/shopify.server";
import { json } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const { admin, session } = await authenticate.admin(request);

  try {
    const response = await admin.rest.resources.InventoryLevel.all({
      session: session,
      location_ids: "67516203143",
    });

    if (response) {
      console.log("hit");
      const data = response.data;
      console.log(data, "data");
      return json({
        inventory: data,
      });
    }

    return null;
  } catch (err) {
    console.log(err);
  }
};

const Inventory = () => {
  const inventory: any = useLoaderData();
  console.log(inventory, "inventory");
  return (
    <Page>
      <Layout>
        <Layout.Section>
          <Card>
            <List type="bullet" gap="loose"></List>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
};

export default Inventory;
