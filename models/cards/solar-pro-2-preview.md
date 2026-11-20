---
type: Model
title: Solar Pro 2 (Preview)
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 64000
status: past
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 34.6, z: -0.61, r: 40.8, estimated: false }  # 전문 지식
  reasoning: { s: 31.2, z: -0.22, r: 46.7, estimated: false }  # 추론
  coding: { s: 58.9, z: 0.64, r: 59.6, estimated: true }  # 코딩
  agentic: { s: 51.9, z: 0.24, r: 53.6, estimated: true }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 18.7, z: -1.04, r: 34.5, estimated: true }  # 긴문맥
  instruction: { s: 35.2, z: -0.78, r: 38.3, estimated: true }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2 (Preview)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-20
timestamp: 2026-11-20T00:00:00Z
---

# Solar Pro 2 (Preview)

Upstage · Proprietary · Small · 컨텍스트 64k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 에이전트
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 64k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 40.8 | -0.61 | 실측 | [[gpqa-diamond]] 57.77777777777779%×0.4, [[humanitys-last-exam]] 6.0704355885078805%×0.3 |
| 추론 | 46.7 | -0.22 | 실측 | [[gpqa-diamond]] 57.77777777777779%×1.0, [[humanitys-last-exam]] 6.0704355885078805%×1.0 |
| 코딩 | 59.6 | +0.64 | 추정 | (추정) |
| 에이전트 | 53.6 | +0.24 | 추정 | (추정) |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 34.5 | -1.04 | 추정 | (추정) |
| 지시 따르기 | 38.3 | -0.78 | 추정 | (추정) |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
