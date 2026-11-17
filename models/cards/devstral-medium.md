---
type: Model
title: Devstral Medium
creator: Mistral
license: Proprietary
intelligence_index: None
price_blended_usd_1m: None
output_speed_tps: None
context_window: 256000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 27.6, z: -0.94, r: 35.8, estimated: false }  # 전문 지식
  reasoning: { s: 16.4, z: -0.94, r: 35.9, estimated: false }  # 추론
  coding: { s: 13.8, z: -0.88, r: 36.8, estimated: false }  # 코딩
  agentic: { s: 16.9, z: -0.96, r: 35.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 36.1, z: -0.51, r: 42.3, estimated: false }  # 긴문맥
  instruction: { s: 25.0, z: -1.2, r: 32.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Devstral Medium
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# Devstral Medium

Mistral · Proprietary · Unknown · 컨텍스트 256k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 코딩
- **약점**: 에이전트, 지시 따르기

## 실용 지표
`입력 $None · 출력 $None · 혼합 $None/1M · None t/s · TTFT Nones · 256k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 35.8 | -0.94 | 실측 | [[gpqa-diamond]] 49.1919191919192%×0.4, [[humanitys-last-exam]] 3.75347544022243%×0.3 |
| 추론 | 35.9 | -0.94 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 49.1919191919192%×1.0, [[humanitys-last-exam]] 3.75347544022243%×1.0 |
| 코딩 | 36.8 | -0.88 | 실측 | [[terminal-bench]] 9.09090909090909%×0.5 |
| 에이전트 | 35.6 | -0.96 | 실측 | [[tau2-bench]] 19.8830409356725%×1.0, [[terminal-bench]] 9.09090909090909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 42.3 | -0.51 | 실측 | [[aa-lcr]] 32.0%×1.0 |
| 지시 따르기 | 32.0 | -1.2 | 실측 | [[ifbench]] 29.9319727891156%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
