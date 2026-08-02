---
type: Model
title: Solar Pro 2
creator: Upstage
license: Proprietary
intelligence_index: 13.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Small
params_b: 30.9
is_reasoning: true
radar:
  knowledge: { s: 36.8, z: -0.21, r: 46.8, estimated: false }  # 전문 지식
  reasoning: { s: 33.4, z: -0.06, r: 49.1, estimated: false }  # 추론
  coding: { s: 26.7, z: -0.85, r: 37.3, estimated: false }  # 코딩
  agentic: { s: 23.1, z: -0.52, r: 42.2, estimated: true }  # 에이전트
  trust: { s: 9.7, z: -0.87, r: 36.9, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 22.9, z: -0.79, r: 38.2, estimated: true }  # 긴문맥
  instruction: { s: 47.6, z: -0.23, r: 46.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-02
timestamp: 2026-08-02T00:00:00Z
---

# Solar Pro 2

Upstage · Proprietary · Small(30.9B) · 컨텍스트 64k · 종합지능 **13.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 신뢰성

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.8 | -0.21 | 실측 | [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 6.0%×0.3 |
| 추론 | 49.1 | -0.06 | 실측 | [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 6.0%×1.0 |
| 코딩 | 37.3 | -0.85 | 실측 | [[scicode]] 16.0%×1.0 |
| 에이전트 | 42.2 | -0.52 | 추정 | (추정) |
| 신뢰성 | 36.9 | -0.87 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 38.2 | -0.79 | 추정 | (추정) |
| 지시 따르기 | 46.6 | -0.23 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
