---
type: Model
title: Gemini 3 Flash (non-reasoning)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.435
output_speed_tps: 171.988063302014
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 55.3, z: 0.42, r: 56.2, estimated: false }  # 전문 지식
  reasoning: { s: 35.2, z: 0.0, r: 50.0, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 46.0, z: -0.04, r: 49.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.72, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 62.4, z: 0.14, r: 52.2, estimated: false }  # 긴문맥
  instruction: { s: 60.4, z: 0.41, r: 56.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3 Flash (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Gemini 3 Flash (non-reasoning)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 멀티모달, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.5 · 출력 $3.0 · 혼합 $0.435/1M · 171.988063302014 t/s · TTFT 1.2852437720111s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 56.2 | +0.42 | 실측 | [[gpqa-diamond]] 81.2121%×0.4, [[humanitys-last-exam]] 14.9676%×0.3 |
| 추론 | 50.0 | +0.0 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 81.2121%×1.0, [[humanitys-last-exam]] 14.9676%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.8182%×0.5 |
| 에이전트 | 49.4 | -0.04 | 실측 | [[tau2-bench]] 43.2749%×1.0, [[terminal-bench]] 31.8182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.72 | 실측 | [[mmmu-pro]] 78.5549%×1.0 |
| 긴문맥 | 52.2 | +0.14 | 실측 | [[aa-lcr]] 55.3333%×1.0 |
| 지시 따르기 | 56.2 | +0.41 | 실측 | [[ifbench]] 55.102%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
