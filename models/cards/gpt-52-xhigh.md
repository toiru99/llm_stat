---
type: Model
title: GPT-5.2 (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 68.2120982598582
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 74.6, z: 1.35, r: 70.3, estimated: false }  # 전문 지식
  reasoning: { s: 58.5, z: 1.16, r: 67.4, estimated: false }  # 추론
  coding: { s: 71.3, z: 1.02, r: 65.3, estimated: false }  # 코딩
  agentic: { s: 78.4, z: 1.1, r: 66.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 93.2, z: 1.09, r: 66.3, estimated: false }  # 긴문맥
  instruction: { s: 88.9, z: 1.6, r: 74.0, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-26
timestamp: 2026-11-26T00:00:00Z
---

# GPT-5.2 (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 긴문맥, 코딩

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 68.2120982598582 t/s · TTFT 99.4603708058168s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 70.3 | +1.35 | 실측 | [[gpqa-diamond]] 90.303%×0.4, [[humanitys-last-exam]] 37.6738%×0.3 |
| 추론 | 67.4 | +1.16 | 실측 | [[critpt]] 11.551%×1.0, [[gpqa-diamond]] 90.303%×1.0, [[humanitys-last-exam]] 37.6738%×1.0 |
| 코딩 | 65.3 | +1.02 | 실측 | [[terminal-bench]] 46.9697%×0.5 |
| 에이전트 | 66.6 | +1.1 | 실측 | [[tau2-bench]] 84.7953%×1.0, [[terminal-bench]] 46.9697%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 66.3 | +1.09 | 실측 | [[aa-lcr]] 82.6667%×1.0 |
| 지시 따르기 | 74.0 | +1.6 | 실측 | [[ifbench]] 75.4422%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
