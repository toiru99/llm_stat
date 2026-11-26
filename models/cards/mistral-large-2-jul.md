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
params_b: 123
is_reasoning: false
radar:
  knowledge: { s: 25.8, z: -1.02, r: 34.7, estimated: false }  # 전문 지식
  reasoning: { s: 22.9, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: null, z: null, r: null, estimated: false }  # 코딩
  agentic: { s: 33.3, z: -0.49, r: 42.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 2.3, z: -1.7, r: 24.5, estimated: false }  # 긴문맥
  instruction: { s: 27.4, z: -0.96, r: 35.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Mistral Large 2 (Jul)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# Mistral Large 2 (Jul)

Mistral · Open · Medium(123B) · 컨텍스트 128k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 에이전트, 추론
- **약점**: 전문 지식, 긴문맥

## 실용 지표
`입력 $2.0 · 출력 $6.0 · 혼합 $2.4/1M · None t/s · TTFT Nones · 128k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 34.7 | -1.02 | 실측 | [[gpqa-diamond]] 47.1717%×0.4, [[humanitys-last-exam]] 2.95%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[gpqa-diamond]] 47.1717%×1.0, [[humanitys-last-exam]] 2.95%×1.0 |
| 코딩 | — | — | 측정 안 됨 | — |
| 에이전트 | 42.7 | -0.49 | 실측 | [[tau2-bench]] 33.0409%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 24.5 | -1.7 | 실측 | [[aa-lcr]] 2%×1.0 |
| 지시 따르기 | 35.6 | -0.96 | 실측 | [[ifbench]] 31.6327%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
