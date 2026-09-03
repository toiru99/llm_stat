---
type: Model
title: Solar Pro 2 (Preview) (Non-reasoning)
creator: Upstage
license: Proprietary
intelligence_index: 10.0
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Small
params_b: 30.9
is_reasoning: false
radar:
  knowledge: { s: 31.8, z: -0.43, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 28.5, z: -0.31, r: 45.3, estimated: false }  # 추론
  coding: { s: 43.5, z: -0.15, r: 47.8, estimated: false }  # 코딩
  agentic: { s: 24.7, z: -0.49, r: 42.6, estimated: true }  # 에이전트
  trust: { s: 22.2, z: -0.12, r: 48.3, estimated: true }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 33.4, z: -0.51, r: 42.3, estimated: true }  # 긴문맥
  instruction: { s: 42.8, z: -0.43, r: 43.6, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (Preview) (Non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Solar Pro 2 (Preview) (Non-reasoning)

Upstage · Proprietary · Small(30.9B) · 컨텍스트 64k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.43 | 실측 | [[gpqa-diamond]] 54.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 45.3 | -0.31 | 실측 | [[gpqa-diamond]] 54.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 47.8 | -0.15 | 실측 | [[scicode]] 27.0%×1.0 |
| 에이전트 | 42.6 | -0.49 | 추정 | (추정) |
| 신뢰성 | 48.3 | -0.12 | 추정 | (추정) |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.3 | -0.51 | 추정 | (추정) |
| 지시 따르기 | 43.6 | -0.43 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
