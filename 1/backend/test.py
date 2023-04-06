import unittest
import json
from app import app
import random

class Tests(unittest.TestCase):

    def test_sum(self):
        with app.test_client() as client:
            csrf_token = client.get('/csrf').json['csrf_token']
            headers = {'X-CSRFToken': csrf_token}
            valueX = random.randint(0, 100)
            valueY = random.randint(0, 100)
            data = {'valueX': valueX, 'valueY': valueY}
            response = client.post('/sum', headers=headers, json=data)
            result = json.loads(response.data)['sum']
            self.assertEqual(result, valueX + valueY)

    def test_csrf_token(self):
        with app.test_client() as client:
            response = client.get('/csrf')
            self.assertEqual(response.status_code, 200)
            self.assertTrue(response.json['csrf_token'])

    def test_index(self):
        with app.test_client() as client:
            response = client.get('/')
            self.assertEqual(response.status_code, 200)
            self.assertIn(b'<!doctype html>', response.data)


if __name__ == '__main__':
    unittest.main()
