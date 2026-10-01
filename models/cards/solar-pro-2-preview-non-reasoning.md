---
type: Model
title: Solar Pro 2 (Preview) (non-reasoning)
creator: Upstage
license: Proprietary
intelligence_index: 8.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Small
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 31.4, z: -0.51, r: 42.3, estimated: false }  # 전문 지식
  reasoning: { s: 28.1, z: -0.38, r: 44.3, estimated: false }  # 추론
  coding: { s: 6.2, z: -1.03, r: 34.5, estimated: true }  # 코딩
  agentic: { s: 13.2, z: -0.98, r: 35.4, estimated: true }  # 에이전트
  trust: { s: 11.3, z: -0.71, r: 39.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 10.2, z: -1.25, r: 31.2, estimated: true }  # 긴문맥
  instruction: { s: 38.3, z: -0.66, r: 40.1, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (Preview) (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-01
timestamp: 2026-10-01T00:00:00Z
---

# Solar Pro 2 (Preview) (non-reasoning)

Upstage · Proprietary · Small · 컨텍스트 64k · 종합지능 **8.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.3 | -0.51 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 44.3 | -0.38 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 34.5 | -1.03 | 추정 | (추정) |
| 에이전트 | 35.4 | -0.98 | 추정 | (추정) |
| 신뢰성 | 39.3 | -0.71 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.2 | -1.25 | 추정 | (추정) |
| 지시 따르기 | 40.1 | -0.66 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
