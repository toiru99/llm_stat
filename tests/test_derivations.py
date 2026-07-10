"""build_cards.py 파생 함수 단위 테스트 (표준 라이브러리 unittest)."""
import sys, pathlib, unittest
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent.parent / "scripts"))
from build_cards import size_bucket, price_bucket, status_of  # noqa: E402


class TestDerivations(unittest.TestCase):
    def test_size_bucket(self):
        self.assertEqual(size_bucket("tiny"), "Tiny")
        self.assertEqual(size_bucket("small"), "Small")
        self.assertEqual(size_bucket("medium"), "Medium")
        self.assertEqual(size_bucket("large"), "Large")
        self.assertEqual(size_bucket(None), "Unknown")     # 독점모델 비공개
        self.assertEqual(size_bucket("weird"), "Unknown")  # 미지 값 방어

    def test_price_bucket_boundaries(self):
        self.assertIsNone(price_bucket(None))
        self.assertEqual(price_bucket(0.0), "Low")
        self.assertEqual(price_bucket(0.14), "Low")
        self.assertEqual(price_bucket(0.15), "Medium")   # 경계: 0.15는 Medium
        self.assertEqual(price_bucket(1.0), "Medium")    # 경계: 1.0은 Medium
        self.assertEqual(price_bucket(1.01), "High")

    def test_status_of(self):
        self.assertEqual(status_of(True), "past")
        self.assertEqual(status_of(False), "current")
        self.assertEqual(status_of(None), "current")     # 조인 실패는 current 취급


if __name__ == "__main__":
    unittest.main()
