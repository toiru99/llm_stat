---
type: Model
title: GPT-5.6 Sol (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 103.270803501129
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.8, z: 1.56, r: 73.4, estimated: false }  # 전문 지식
  reasoning: { s: 72.0, z: 1.83, r: 77.5, estimated: false }  # 추론
  coding: { s: 87.2, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 82.2, z: 1.24, r: 68.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.2, z: 0.91, r: 63.6, estimated: false }  # 멀티모달
  long_context: { s: 90.6, z: 1.01, r: 65.1, estimated: false }  # 긴문맥
  instruction: { s: 80.7, z: 1.26, r: 68.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-28
timestamp: 2026-11-28T00:00:00Z
---

# GPT-5.6 Sol (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 103.270803501129 t/s · TTFT 3.86982859401002s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.4 | +1.56 | 실측 | [[gpqa-diamond]] 92.6263%×0.4, [[humanitys-last-exam]] 42.215%×0.3 |
| 추론 | 77.5 | +1.83 | 실측 | [[critpt]] 22.8571%×1.0, [[gpqa-diamond]] 92.6263%×1.0, [[humanitys-last-exam]] 42.215%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 57.4074%×1.0, [[terminal-bench]] 62.8788%×0.5 |
| 에이전트 | 68.5 | +1.24 | 실측 | [[gdpval]] 1432.97 Elo×1.0, [[tau2-bench]] 80.9942%×1.0, [[tau3-banking]] 36.4948%×1.0, [[terminal-bench]] 62.8788%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 63.6 | +0.91 | 실측 | [[mmmu-pro]] 81.3873%×1.0 |
| 긴문맥 | 65.1 | +1.01 | 실측 | [[aa-lcr]] 80.3333%×1.0 |
| 지시 따르기 | 68.9 | +1.26 | 실측 | [[ifbench]] 69.5918%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
