---
type: Model
title: GPT-5.2 Codex (xhigh)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.8725
output_speed_tps: 71.221130807145
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 73.2, z: 1.29, r: 69.3, estimated: false }  # 전문 지식
  reasoning: { s: 54.8, z: 0.97, r: 64.6, estimated: false }  # 추론
  coding: { s: 56.3, z: 0.51, r: 57.7, estimated: false }  # 코딩
  agentic: { s: 74.6, z: 0.97, r: 64.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 82.4, z: 0.56, r: 58.4, estimated: false }  # 멀티모달
  long_context: { s: 92.9, z: 1.07, r: 66.1, estimated: false }  # 긴문맥
  instruction: { s: 92.0, z: 1.73, r: 75.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.2 Codex (xhigh)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-5.2 Codex (xhigh)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 멀티모달, 코딩

## 실용 지표
`입력 $1.75 · 출력 $14.0 · 혼합 $1.8725/1M · 71.221130807145 t/s · TTFT 48.6034615418222s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 69.3 | +1.29 | 실측 | [[gpqa-diamond]] 89.899%×0.4, [[humanitys-last-exam]] 35.7275%×0.3 |
| 추론 | 64.6 | +0.97 | 실측 | [[critpt]] 8.66939%×1.0, [[gpqa-diamond]] 89.899%×1.0, [[humanitys-last-exam]] 35.7275%×1.0 |
| 코딩 | 57.7 | +0.51 | 실측 | [[terminal-bench]] 37.1212%×0.5 |
| 에이전트 | 64.6 | +0.97 | 실측 | [[tau2-bench]] 92.1053%×1.0, [[terminal-bench]] 37.1212%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 58.4 | +0.56 | 실측 | [[mmmu-pro]] 76.3006%×1.0 |
| 긴문맥 | 66.1 | +1.07 | 실측 | [[aa-lcr]] 82.3333%×1.0 |
| 지시 따르기 | 75.9 | +1.73 | 실측 | [[ifbench]] 77.619%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
