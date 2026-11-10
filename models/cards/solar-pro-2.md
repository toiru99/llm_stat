---
type: Model
title: Solar Pro 2
creator: Upstage
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 66000
status: past
size_class: Unknown
params_b: null
is_reasoning: null
radar:
  knowledge: { s: 42.6, z: -0.21, r: 46.9, estimated: false }  # 전문 지식
  reasoning: { s: 38.3, z: -0.24, r: 46.4, estimated: false }  # 추론
  coding: { s: 4.6, z: -1.11, r: 33.3, estimated: false }  # 코딩
  agentic: { s: 4.6, z: -1.03, r: 34.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.59, r: 26.2, estimated: false }  # 긴문맥
  instruction: { s: 35.1, z: -0.76, r: 38.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Solar Pro 2
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-10
timestamp: 2026-11-10T00:00:00Z
---

# Solar Pro 2

Upstage · Proprietary · Unknown · 컨텍스트 66k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 코딩, 긴문맥

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 66k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 46.9 | -0.21 | 실측 | [[gpqa-diamond]] 68.7%×0.4, [[humanitys-last-exam]] 7.4%×0.3 |
| 추론 | 46.4 | -0.24 | 실측 | [[gpqa-diamond]] 68.7%×1.0, [[humanitys-last-exam]] 7.4%×1.0 |
| 코딩 | 33.3 | -1.11 | 실측 | [[terminal-bench]] 3.0%×0.5 |
| 에이전트 | 34.6 | -1.03 | 실측 | [[terminal-bench]] 3.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 26.2 | -1.59 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 38.6 | -0.76 | 실측 | [[ifbench]] 37.1%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
