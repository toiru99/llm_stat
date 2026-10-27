---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: 24.0
price_blended_usd_1m: 1.305
output_speed_tps: 194.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.5, z: 0.99, r: 64.8, estimated: false }  # 전문 지식
  reasoning: { s: 42.1, z: 0.22, r: 53.3, estimated: false }  # 추론
  coding: { s: 69.7, z: 1.07, r: 66.1, estimated: false }  # 코딩
  agentic: { s: 69.7, z: 1.21, r: 68.1, estimated: false }  # 에이전트
  trust: { s: 24.7, z: -0.12, r: 48.3, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.84, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.47, r: 57.0, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.22, r: 46.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-27
timestamp: 2026-10-27T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **24.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 신뢰성, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 194.0 t/s · TTFT 0.85s · 1M ctx` · 가성비 18.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 64.8 | +0.99 | 실측 | [[aa-omniscience]] 43.0%×1.0, [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 53.3 | +0.22 | 실측 | [[critpt]] 1.0%×1.0, [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 66.1 | +1.07 | 실측 | [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 68.1 | +1.21 | 실측 | [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | 48.3 | -0.12 | 실측 | [[aa-omniscience]] 26.0%×1.0 |
| 멀티모달 | 62.7 | +0.84 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 57.0 | +0.47 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 46.7 | -0.22 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
