---
type: Model
title: GPT-5.4 nano (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.179
output_speed_tps: 152.434461227347
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 63.5, z: 0.81, r: 62.2, estimated: false }  # 전문 지식
  reasoning: { s: 48.7, z: 0.68, r: 60.1, estimated: false }  # 추론
  coding: { s: 65.6, z: 0.83, r: 62.4, estimated: false }  # 코딩
  agentic: { s: 63.5, z: 0.58, r: 58.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 67.8, z: -0.18, r: 47.3, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.88, r: 63.2, estimated: false }  # 긴문맥
  instruction: { s: 89.6, z: 1.63, r: 74.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5.4 nano (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 에이전트, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 152.434461227347 t/s · TTFT 53.3869602679695s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 62.2 | +0.81 | 실측 | [[gpqa-diamond]] 81.7172%×0.4, [[humanitys-last-exam]] 28.2669%×0.3 |
| 추론 | 60.1 | +0.68 | 실측 | [[critpt]] 9.25306%×1.0, [[gpqa-diamond]] 81.7172%×1.0, [[humanitys-last-exam]] 28.2669%×1.0 |
| 코딩 | 62.4 | +0.83 | 실측 | [[scicode]] 47.2222%×1.0, [[terminal-bench]] 42.4242%×0.5 |
| 에이전트 | 58.7 | +0.58 | 실측 | [[gdpval]] 954.13 Elo×1.0, [[tau2-bench]] 76.0234%×1.0, [[tau3-banking]] 27.4227%×1.0, [[terminal-bench]] 42.4242%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 47.3 | -0.18 | 실측 | [[mmmu-pro]] 65.3757%×1.0 |
| 긴문맥 | 63.2 | +0.88 | 실측 | [[aa-lcr]] 76.6667%×1.0 |
| 지시 따르기 | 74.4 | +1.63 | 실측 | [[ifbench]] 75.9184%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
