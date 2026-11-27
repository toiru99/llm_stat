---
type: Model
title: GPT-5.2 (non-reasoning)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 52.1881334293604
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 44.7, z: -0.1, r: 48.5, estimated: false }  # 전문 지식
  reasoning: { s: 27.4, z: -0.39, r: 44.2, estimated: false }  # 추론
  coding: { s: 48.3, z: 0.24, r: 53.6, estimated: false }  # 코딩
  agentic: { s: 38.8, z: -0.29, r: 45.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 68.5, z: -0.15, r: 47.8, estimated: false }  # 멀티모달
  long_context: { s: 51.5, z: -0.19, r: 47.2, estimated: false }  # 긴문맥
  instruction: { s: 49.6, z: -0.04, r: 49.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-5.2 (non-reasoning)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 코딩, 지시 따르기
- **약점**: 에이전트, 추론

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 52.1881334293604 t/s · TTFT 1.3328113016153s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 48.5 | -0.1 | 실측 | [[gpqa-diamond]] 71.2121%×0.4, [[humanitys-last-exam]] 8.01668%×0.3 |
| 추론 | 44.2 | -0.39 | 실측 | [[critpt]] 0.571429%×1.0, [[gpqa-diamond]] 71.2121%×1.0, [[humanitys-last-exam]] 8.01668%×1.0 |
| 코딩 | 53.6 | +0.24 | 실측 | [[terminal-bench]] 31.8182%×0.5 |
| 에이전트 | 45.6 | -0.29 | 실측 | [[tau2-bench]] 46.4912%×1.0, [[tau3-banking]] 11.134%×1.0, [[terminal-bench]] 31.8182%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.8 | -0.15 | 실측 | [[mmmu-pro]] 65.8382%×1.0 |
| 긴문맥 | 47.2 | -0.19 | 실측 | [[aa-lcr]] 45.6667%×1.0 |
| 지시 따르기 | 49.5 | -0.04 | 실측 | [[ifbench]] 47.415%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
