import React from 'react';
import { 
    Table, Row, Col,
    Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Row>
            <Col md={6}>
                <Row>
                    <Col style={{height: 400}}>
                        <Table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nama Barang</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                        </tbody>
                        </Table>
                    </Col>
                </Row>
            </Col>
            
            <Col md={6}>
                <Card style={{width: 400, padding: 30}} >
                    <Form>
                        <FormGroup>
                            <Label for="Nama Barang">Nama Barang</Label>
                            <Input type="text" name="namabrg" id="namabrg" placeholder="Nama Barang" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Harga">Harga Barang</Label>
                            <Input type="text" name="harga" id="harga" placeholder="Harga Barang" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="Qty">Qty</Label>
                            <Input type="number" name="qty" id="qty" placeholder="Qty" />
                        </FormGroup>
                        <Button color="secondary">Simpan</Button>{' '}
                    </Form>
                </Card>
            </Col>
        </Row>
    );
  }
}