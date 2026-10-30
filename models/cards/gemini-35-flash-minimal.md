---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 181.0
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 64.9, z: 0.68, r: 60.3, estimated: false }  # 전문 지식
  reasoning: { s: 61.6, z: 0.72, r: 60.8, estimated: false }  # 추론
  coding: { s: 69.7, z: 1.09, r: 66.4, estimated: false }  # 코딩
  agentic: { s: 69.7, z: 1.22, r: 68.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.0, z: 0.84, r: 62.7, estimated: false }  # 멀티모달
  long_context: { s: 68.5, z: 0.49, r: 57.3, estimated: false }  # 긴문맥
  instruction: { s: 49.3, z: -0.14, r: 47.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-10-30
timestamp: 2026-10-30T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 코딩
- **약점**: 긴문맥, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 181.0 t/s · TTFT 0.8s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 60.3 | +0.68 | 실측 | [[gpqa-diamond]] 83.0%×0.4, [[humanitys-last-exam]] 24.0%×0.3 |
| 추론 | 60.8 | +0.72 | 실측 | [[gpqa-diamond]] 83.0%×1.0, [[humanitys-last-exam]] 24.0%×1.0 |
| 코딩 | 66.4 | +1.09 | 실측 | [[terminal-bench]] 46.0%×0.5 |
| 에이전트 | 68.3 | +1.22 | 실측 | [[terminal-bench]] 46.0%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.7 | +0.84 | 실측 | [[mmmu-pro]] 80.0%×1.0 |
| 긴문맥 | 57.3 | +0.49 | 실측 | [[aa-lcr]] 61.0%×1.0 |
| 지시 따르기 | 47.8 | -0.14 | 실측 | [[ifbench]] 47.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
