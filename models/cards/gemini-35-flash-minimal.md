---
type: Model
title: Gemini 3.5 Flash (minimal)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 159.72802529788
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 61.7, z: 0.73, r: 60.9, estimated: false }  # 전문 지식
  reasoning: { s: 40.0, z: 0.24, r: 53.6, estimated: false }  # 추론
  coding: { s: 70.1, z: 0.98, r: 64.7, estimated: false }  # 코딩
  agentic: { s: 64.7, z: 0.62, r: 59.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 87.5, z: 0.82, r: 62.3, estimated: false }  # 멀티모달
  long_context: { s: 69.2, z: 0.35, r: 55.2, estimated: false }  # 긴문맥
  instruction: { s: 49.4, z: -0.04, r: 49.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (minimal)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.5 Flash (minimal)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 멀티모달
- **약점**: 추론, 지시 따르기

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 159.72802529788 t/s · TTFT 2.49334464737782s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 60.9 | +0.73 | 실측 | [[gpqa-diamond]] 82.8283%×0.4, [[humanitys-last-exam]] 24.0964%×0.3 |
| 추론 | 53.6 | +0.24 | 실측 | [[critpt]] 1.42857%×1.0, [[gpqa-diamond]] 82.8283%×1.0, [[humanitys-last-exam]] 24.0964%×1.0 |
| 코딩 | 64.7 | +0.98 | 실측 | [[terminal-bench]] 46.2121%×0.5 |
| 에이전트 | 59.3 | +0.62 | 실측 | [[tau2-bench]] 58.7719%×1.0, [[terminal-bench]] 46.2121%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 62.3 | +0.82 | 실측 | [[mmmu-pro]] 80.1156%×1.0 |
| 긴문맥 | 55.2 | +0.35 | 실측 | [[aa-lcr]] 61.3333%×1.0 |
| 지시 따르기 | 49.3 | -0.04 | 실측 | [[ifbench]] 47.2789%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
