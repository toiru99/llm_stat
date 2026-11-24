---
type: Model
title: GPT-5.3 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 102.36871920592
context_window: 400000
status: current
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 78.3, z: 1.53, r: 73.0, estimated: false }  # 전문 지식
  reasoning: { s: 66.1, z: 1.54, r: 73.1, estimated: false }  # 추론
  coding: { s: 80.5, z: 1.33, r: 69.9, estimated: false }  # 코딩
  agentic: { s: 83.6, z: 1.29, r: 69.3, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 85.4, z: 0.71, r: 60.7, estimated: false }  # 멀티모달
  long_context: { s: 94.0, z: 1.11, r: 66.6, estimated: false }  # 긴문맥
  instruction: { s: 88.8, z: 1.6, r: 73.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.3 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.3 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 추론
- **약점**: 긴문맥, 멀티모달

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 102.36871920592 t/s · TTFT 33.2252865241212s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 73.0 | +1.53 | 실측 | [[gpqa-diamond]] 91.5152%×0.4, [[humanitys-last-exam]] 42.493%×0.3 |
| 추론 | 73.1 | +1.54 | 실측 | [[critpt]] 16.8571%×1.0, [[gpqa-diamond]] 91.5152%×1.0, [[humanitys-last-exam]] 42.493%×1.0 |
| 코딩 | 69.9 | +1.33 | 실측 | [[terminal-bench]] 53.0303%×0.5 |
| 에이전트 | 69.3 | +1.29 | 실측 | [[tau2-bench]] 85.9649%×1.0, [[terminal-bench]] 53.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 60.7 | +0.71 | 실측 | [[mmmu-pro]] 78.4971%×1.0 |
| 긴문맥 | 66.6 | +1.11 | 실측 | [[aa-lcr]] 83.3333%×1.0 |
| 지시 따르기 | 73.9 | +1.6 | 실측 | [[ifbench]] 75.3741%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
