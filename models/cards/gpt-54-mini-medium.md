---
type: Model
title: GPT-5.4 mini (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.6525
output_speed_tps: 156.530485122544
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 58.2, z: 0.55, r: 58.3, estimated: false }  # 전문 지식
  reasoning: { s: 38.6, z: 0.17, r: 52.6, estimated: false }  # 추론
  coding: { s: 51.7, z: 0.36, r: 55.4, estimated: false }  # 코딩
  agentic: { s: 44.3, z: -0.1, r: 48.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 75.6, z: 0.21, r: 53.2, estimated: false }  # 멀티모달
  long_context: { s: 75.6, z: 0.55, r: 58.2, estimated: false }  # 긴문맥
  instruction: { s: 73.9, z: 0.98, r: 64.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 mini (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.4 mini (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.75 · 출력 $4.5 · 혼합 $0.6525/1M · 156.530485122544 t/s · TTFT 4.85729645796667s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 58.3 | +0.55 | 실측 | [[gpqa-diamond]] 82.3232%×0.4, [[humanitys-last-exam]] 18.582%×0.3 |
| 추론 | 52.6 | +0.17 | 실측 | [[critpt]] 2.85714%×1.0, [[gpqa-diamond]] 82.3232%×1.0, [[humanitys-last-exam]] 18.582%×1.0 |
| 코딩 | 55.4 | +0.36 | 실측 | [[terminal-bench]] 34.0909%×0.5 |
| 에이전트 | 48.5 | -0.1 | 실측 | [[tau2-bench]] 36.5497%×1.0, [[terminal-bench]] 34.0909%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 53.2 | +0.21 | 실측 | [[mmmu-pro]] 71.1561%×1.0 |
| 긴문맥 | 58.2 | +0.55 | 실측 | [[aa-lcr]] 67%×1.0 |
| 지시 따르기 | 64.6 | +0.98 | 실측 | [[ifbench]] 64.7619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
