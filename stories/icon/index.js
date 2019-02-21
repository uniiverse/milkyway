import React from 'react';

import { storiesOf } from '@storybook/react';

import { Container, Icon, Table } from 'semantic-ui-react';

const stories = storiesOf('Icon', module)
  .add('Default', () =>
    <Container fluid>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Classname</Table.HeaderCell>
            <Table.HeaderCell>Value</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>universe-basic-information</Table.Cell>
            <Table.Cell><Icon className="universe-basic-information" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-checkmark</Table.Cell>
            <Table.Cell><Icon className="universe-checkmark" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-camera</Table.Cell>
            <Table.Cell><Icon className="universe-camera" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-chevron-left</Table.Cell>
            <Table.Cell><Icon className="universe-chevron-left" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-copy-documents</Table.Cell>
            <Table.Cell><Icon className="universe-copy-documents" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-close</Table.Cell>
            <Table.Cell><Icon className="universe-close" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-delete</Table.Cell>
            <Table.Cell><Icon className="universe-delete" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-date</Table.Cell>
            <Table.Cell><Icon className="universe-date" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-discount</Table.Cell>
            <Table.Cell><Icon className="universe-discount" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-discounts</Table.Cell>
            <Table.Cell><Icon className="universe-discounts" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-document</Table.Cell>
            <Table.Cell><Icon className="universe-document" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-duplicate</Table.Cell>
            <Table.Cell><Icon className="universe-duplicate" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-edit</Table.Cell>
            <Table.Cell><Icon className="universe-edit" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-error</Table.Cell>
            <Table.Cell><Icon className="universe-error" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-exclamation</Table.Cell>
            <Table.Cell><Icon className="universe-exclamation" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-filter</Table.Cell>
            <Table.Cell><Icon className="universe-filter" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-flag</Table.Cell>
            <Table.Cell><Icon className="universe-flag" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-geolocation-2</Table.Cell>
            <Table.Cell><Icon className="universe-geolocation-2" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-geolocation</Table.Cell>
            <Table.Cell><Icon className="universe-geolocation" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-hamburger-menu</Table.Cell>
            <Table.Cell><Icon className="universe-hamburger-menu" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-help</Table.Cell>
            <Table.Cell><Icon className="universe-help" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-home</Table.Cell>
            <Table.Cell><Icon className="universe-home" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-info</Table.Cell>
            <Table.Cell><Icon className="universe-info" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-key</Table.Cell>
            <Table.Cell><Icon className="universe-key" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-link</Table.Cell>
            <Table.Cell><Icon className="universe-link" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-location</Table.Cell>
            <Table.Cell><Icon className="universe-location" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-locked</Table.Cell>
            <Table.Cell><Icon className="universe-locked" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-mail</Table.Cell>
            <Table.Cell><Icon className="universe-mail" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-more</Table.Cell>
            <Table.Cell><Icon className="universe-more" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-no-view</Table.Cell>
            <Table.Cell><Icon className="universe-no-view" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-open-in-new</Table.Cell>
            <Table.Cell><Icon className="universe-open-in-new" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-payment</Table.Cell>
            <Table.Cell><Icon className="universe-payment" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-plus</Table.Cell>
            <Table.Cell><Icon className="universe-plus" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-price-tag</Table.Cell>
            <Table.Cell><Icon className="universe-price-tag" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-promote</Table.Cell>
            <Table.Cell><Icon className="universe-promote" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-question</Table.Cell>
            <Table.Cell><Icon className="universe-question" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-reports</Table.Cell>
            <Table.Cell><Icon className="universe-reports" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-seats</Table.Cell>
            <Table.Cell><Icon className="universe-seats" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-search</Table.Cell>
            <Table.Cell><Icon className="universe-search" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-settings</Table.Cell>
            <Table.Cell><Icon className="universe-settings" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-shopping-cart</Table.Cell>
            <Table.Cell><Icon className="universe-shopping-cart" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-star-copy</Table.Cell>
            <Table.Cell><Icon className="universe-star-copy" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-star</Table.Cell>
            <Table.Cell><Icon className="universe-star" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-ticket</Table.Cell>
            <Table.Cell><Icon className="universe-ticket" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-time</Table.Cell>
            <Table.Cell><Icon className="universe-time" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-unlocked</Table.Cell>
            <Table.Cell><Icon className="universe-unlocked" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-users</Table.Cell>
            <Table.Cell><Icon className="universe-users" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-view</Table.Cell>
            <Table.Cell><Icon className="universe-view" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-1</Table.Cell>
            <Table.Cell><Icon className="universe-1" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-2</Table.Cell>
            <Table.Cell><Icon className="universe-2" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-3</Table.Cell>
            <Table.Cell><Icon className="universe-3" /></Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>universe-4</Table.Cell>
            <Table.Cell><Icon className="universe-4" /></Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </Container>
  );

export default stories;