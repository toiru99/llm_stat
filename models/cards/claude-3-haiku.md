---
type: Model
title: Claude 3 Haiku
creator: Anthropic
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.35
output_speed_tps: None
context_window: 200000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 20.1, z: -1.29, r: 30.6, estimated: false }  # 전문 지식
  reasoning: { s: 18.2, z: -1.25, r: 31.3, estimated: false }  # 추론
  coding: { s: 1.5, z: -1.19, r: 32.1, estimated: false }  # 코딩
  agentic: { s: 1.5, z: -1.12, r: 33.2, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 21.9, z: -2.5, r: 12.5, estimated: false }  # 멀티모달
  long_context: { s: 31.5, z: -0.62, r: 40.7, estimated: false }  # 긴문맥
  instruction: { s: 33.8, z: -0.79, r: 38.1, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Claude 3 Haiku
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-28
timestamp: 2026-10-28T00:00:00Z
---

# Claude 3 Haiku

Anthropic · Proprietary · Unknown · 컨텍스트 200k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 전문 지식, 멀티모달

## 실용 지표
`입력 $0.25 · 출력 $1.25 · 혼합 $0.35/1M · None t/s · TTFT Nones · 200k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 30.6 | -1.29 | 실측 | [[gpqa-diamond]] 37.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 31.3 | -1.25 | 실측 | [[gpqa-diamond]] 37.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 32.1 | -1.19 | 실측 | [[terminal-bench]] 1.0%×0.5 |
| 에이전트 | 33.2 | -1.12 | 실측 | [[terminal-bench]] 1.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 12.5 | -2.5 | 실측 | [[mmmu-pro]] 31.0%×1.0 |
| 긴문맥 | 40.7 | -0.62 | 실측 | [[aa-lcr]] 28.0%×1.0 |
| 지시 따르기 | 38.1 | -0.79 | 실측 | [[ifbench]] 36.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
