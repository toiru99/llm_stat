---
type: Model
title: GPT-5 (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.3375
output_speed_tps: 82.3166776994005
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.4, z: 0.81, r: 62.1, estimated: false }  # 전문 지식
  reasoning: { s: 39.7, z: 0.23, r: 53.4, estimated: false }  # 추론
  coding: { s: 57.5, z: 0.55, r: 58.3, estimated: false }  # 코딩
  agentic: { s: 72.4, z: 0.89, r: 63.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 79.8, z: 0.43, r: 56.4, estimated: false }  # 멀티모달
  long_context: { s: 85.7, z: 0.86, r: 62.9, estimated: false }  # 긴문맥
  instruction: { s: 82.1, z: 1.32, r: 69.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5 (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-5 (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 에이전트
- **약점**: 멀티모달, 추론

## 실용 지표
`입력 $1.25 · 출력 $10.0 · 혼합 $1.3375/1M · 82.3166776994005 t/s · TTFT 28.0597934800222s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.1 | +0.81 | 실측 | [[gpqa-diamond]] 84.1751%×0.4, [[humanitys-last-exam]] 25.3939%×0.3 |
| 추론 | 53.4 | +0.23 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 84.1751%×1.0, [[humanitys-last-exam]] 25.3939%×1.0 |
| 코딩 | 58.3 | +0.55 | 실측 | [[terminal-bench]] 37.8788%×0.5 |
| 에이전트 | 63.3 | +0.89 | 실측 | [[tau2-bench]] 86.5497%×1.0, [[terminal-bench]] 37.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 56.4 | +0.43 | 실측 | [[mmmu-pro]] 74.3353%×1.0 |
| 긴문맥 | 62.9 | +0.86 | 실측 | [[aa-lcr]] 76%×1.0 |
| 지시 따르기 | 69.8 | +1.32 | 실측 | [[ifbench]] 70.6122%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
