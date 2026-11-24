---
type: Model
title: Gemini 3.5 Flash (medium)
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.305
output_speed_tps: 159.185517391948
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.0, z: 1.52, r: 72.8, estimated: false }  # 전문 지식
  reasoning: { s: 60.2, z: 1.24, r: 68.7, estimated: false }  # 추론
  coding: { s: 59.8, z: 0.63, r: 59.5, estimated: false }  # 코딩
  agentic: { s: 78.1, z: 1.09, r: 66.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 92.5, z: 1.08, r: 66.2, estimated: false }  # 멀티모달
  long_context: { s: 83.8, z: 0.8, r: 62.0, estimated: false }  # 긴문맥
  instruction: { s: 87.7, z: 1.55, r: 73.2, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.5 Flash (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# Gemini 3.5 Flash (medium)

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $1.5 · 출력 $9.0 · 혼합 $1.305/1M · 159.185517391948 t/s · TTFT 7.94451980324991s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 72.8 | +1.52 | 실측 | [[gpqa-diamond]] 92.1212%×0.4, [[humanitys-last-exam]] 41.3346%×0.3 |
| 추론 | 68.7 | +1.24 | 실측 | [[critpt]] 10.8571%×1.0, [[gpqa-diamond]] 92.1212%×1.0, [[humanitys-last-exam]] 41.3346%×1.0 |
| 코딩 | 59.5 | +0.63 | 실측 | [[terminal-bench]] 39.3939%×0.5 |
| 에이전트 | 66.4 | +1.09 | 실측 | [[tau2-bench]] 95.614%×1.0, [[terminal-bench]] 39.3939%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 66.2 | +1.08 | 실측 | [[mmmu-pro]] 83.8728%×1.0 |
| 긴문맥 | 62.0 | +0.8 | 실측 | [[aa-lcr]] 74.3333%×1.0 |
| 지시 따르기 | 73.2 | +1.55 | 실측 | [[ifbench]] 74.5578%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
