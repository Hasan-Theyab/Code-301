import React from 'react';
import Hornedbeast from './Hornedbeast';
import data from './hornedbeast.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';


class Main extends React.Component {
    render() {
        return (
            <>
            <Row xs={1} md={3} className="g-4">
                {data.map((item) => {
                    return (
                        <Hornedbeast
                            title={item.title}
                            imgUrl={item.image_url}
                            description={item.description}
                            keyword={item.keyword}
                        />
                    )

                })
            }
            </Row>
            </>
        )
    }
}
