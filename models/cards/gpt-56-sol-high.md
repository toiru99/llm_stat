---
type: Model
title: GPT-5.6 Sol (high)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 3.08
output_speed_tps: 101.3343980874
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 81.2, z: 1.67, r: 75.1, estimated: false }  # 전문 지식
  reasoning: { s: 76.5, z: 2.05, r: 80.8, estimated: false }  # 추론
  coding: { s: 87.2, z: 1.55, r: 73.3, estimated: false }  # 코딩
  agentic: { s: 83.5, z: 1.28, r: 69.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 89.8, z: 0.94, r: 64.1, estimated: false }  # 멀티모달
  long_context: { s: 92.1, z: 1.05, r: 65.8, estimated: false }  # 긴문맥
  instruction: { s: 80.1, z: 1.23, r: 68.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.6 Sol (high)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.6 Sol (high)

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $4.0 · 출력 $20.0 · 혼합 $3.08/1M · 101.3343980874 t/s · TTFT 6.01898417128332s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 75.1 | +1.67 | 실측 | [[gpqa-diamond]] 92.8283%×0.4, [[humanitys-last-exam]] 46.0148%×0.3 |
| 추론 | 80.8 | +2.05 | 실측 | [[critpt]] 25.7143%×1.0, [[gpqa-diamond]] 92.8283%×1.0, [[humanitys-last-exam]] 46.0148%×1.0 |
| 코딩 | 73.3 | +1.55 | 실측 | [[scicode]] 57.7546%×1.0, [[terminal-bench]] 62.1212%×0.5 |
| 에이전트 | 69.3 | +1.28 | 실측 | [[gdpval]] 1511.27 Elo×1.0, [[tau2-bench]] 83.3333%×1.0, [[tau3-banking]] 36.701%×1.0, [[terminal-bench]] 62.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 64.1 | +0.94 | 실측 | [[mmmu-pro]] 81.8497%×1.0 |
| 긴문맥 | 65.8 | +1.05 | 실측 | [[aa-lcr]] 81.6667%×1.0 |
| 지시 따르기 | 68.5 | +1.23 | 실측 | [[ifbench]] 69.1837%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
