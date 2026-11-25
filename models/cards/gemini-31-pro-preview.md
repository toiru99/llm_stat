---
type: Model
title: Gemini 3.1 Pro Preview
creator: Google
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.74
output_speed_tps: 113.362382008507
context_window: 1000000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 82.6, z: 1.74, r: 76.2, estimated: false }  # 전문 지식
  reasoning: { s: 70.0, z: 1.73, r: 76.0, estimated: false }  # 추론
  coding: { s: 84.0, z: 1.45, r: 71.7, estimated: false }  # 코딩
  agentic: { s: 68.1, z: 0.74, r: 61.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 90.6, z: 0.98, r: 64.7, estimated: false }  # 멀티모달
  long_context: { s: 92.5, z: 1.07, r: 66.0, estimated: false }  # 긴문맥
  instruction: { s: 91.3, z: 1.7, r: 75.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Gemini 3.1 Pro Preview
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-25
timestamp: 2026-11-25T00:00:00Z
---

# Gemini 3.1 Pro Preview

Google · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 멀티모달, 에이전트

## 실용 지표
`입력 $2.0 · 출력 $12.0 · 혼합 $1.74/1M · 113.362382008507 t/s · TTFT 14.2778404726202s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 76.2 | +1.74 | 실측 | [[gpqa-diamond]] 94.1414%×0.4, [[humanitys-last-exam]] 47.0343%×0.3 |
| 추론 | 76.0 | +1.73 | 실측 | [[critpt]] 17.7143%×1.0, [[gpqa-diamond]] 94.1414%×1.0, [[humanitys-last-exam]] 47.0343%×1.0 |
| 코딩 | 71.7 | +1.45 | 실측 | [[scicode]] 58.6806%×1.0, [[terminal-bench]] 53.7879%×0.5 |
| 에이전트 | 61.1 | +0.74 | 실측 | [[gdpval]] 798.54 Elo×1.0, [[tau2-bench]] 95.614%×1.0, [[tau3-banking]] 21.4433%×1.0, [[terminal-bench]] 53.7879%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.7 | +0.98 | 실측 | [[mmmu-pro]] 82.4277%×1.0 |
| 긴문맥 | 66.0 | +1.07 | 실측 | [[aa-lcr]] 82%×1.0 |
| 지시 따르기 | 75.5 | +1.7 | 실측 | [[ifbench]] 77.1429%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
