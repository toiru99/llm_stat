---
type: Model
title: Mistral Large 2 (Jul)
creator: Mistral
license: Open
intelligence_index: None
price_blended_usd_1m: 2.4
output_speed_tps: None
context_window: 128000
status: past
size_class: Medium
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 25.8, z: -1.04, r: 34.4, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.63, r: 40.6, estimated: false }  # 추론
  coding: { s: 18.3, z: -0.74, r: 38.9, estimated: true }  # 코딩
  agentic: { s: 33.3, z: -0.4, r: 44.0, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.3, z: -1.53, r: 27.1, estimated: false }  # 긴문맥
  instruction: { s: 27.4, z: -1.11, r: 33.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Jul)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-21
timestamp: 2026-11-21T00:00:00Z
---

# Mistral Large 2 (Jul)

Mistral · Open · Medium · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 지시 따르기, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $2.4/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 34.4 | -1.04 | 실측 | [[gpqa-diamond]] 47.1717171717172%×0.4, [[humanitys-last-exam]] 2.9499999999999997%×0.3 |
| 추론 | 40.6 | -0.63 | 실측 | [[gpqa-diamond]] 47.1717171717172%×1.0, [[humanitys-last-exam]] 2.9499999999999997%×1.0 |
| 코딩 | 38.9 | -0.74 | 추정 | (추정) |
| 에이전트 | 44.0 | -0.4 | 실측 | [[tau2-bench]] 33.0409356725146%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 27.1 | -1.53 | 실측 | [[aa-lcr]] 2.0%×1.0 |
| 지시 따르기 | 33.4 | -1.11 | 실측 | [[ifbench]] 31.632653061224502%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
