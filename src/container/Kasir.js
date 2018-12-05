import React from 'react';
import { 
    Table, Row, Col,
    Button, Form, FormGroup, Label, Input, FormText, Card } from 'reactstrap';

export default class Example extends React.Component {
    state = {
        data:[
            {
                namabrg: "HP",
                harga: 12000,
                qty: 3
            },
            {
                namabrg: "Laptop",
                harga: 10000,
                qty: 3
            }
        ]
    }
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
                                {
                                    this.state.data.map((datas, key)=>{
                                        return (
                                            <tr>
                                            <th scope="row">{key + 1}</th>
                                            <td>{datas.namabrg}</td>
                                            <td>{datas.harga}</td>
                                            <td>{datas.qty}</td>
                                            <td>{datas.qty * datas.harga}</td>
                                            </tr>
                                        )
                                    })
                                }
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
                            <Input type="number" name="harga" id="harga" placeholder="Harga Barang" />
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