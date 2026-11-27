---
type: Model
title: GPT-5.4 nano (medium)
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 0.179
output_speed_tps: 129.13448925351
context_window: 400000
status: past
size_class: Unknown
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 52.5, z: 0.28, r: 54.2, estimated: false }  # 전문 지식
  reasoning: { s: 37.1, z: 0.1, r: 51.5, estimated: false }  # 추론
  coding: { s: 50.6, z: 0.32, r: 54.8, estimated: false }  # 코딩
  agentic: { s: 51.8, z: 0.16, r: 52.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 60.1, z: -0.58, r: 41.3, estimated: false }  # 멀티모달
  long_context: { s: 75.9, z: 0.56, r: 58.4, estimated: false }  # 긴문맥
  instruction: { s: 73.4, z: 0.96, r: 64.3, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-5.4 nano (medium)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# GPT-5.4 nano (medium)

OpenAI · Proprietary · Unknown · 컨텍스트 400k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 긴문맥
- **약점**: 추론, 멀티모달

## 실용 지표
`입력 $0.2 · 출력 $1.25 · 혼합 $0.179/1M · 129.13448925351 t/s · TTFT 4.87197252741118s · 400k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 54.2 | +0.28 | 실측 | [[gpqa-diamond]] 76.0606%×0.4, [[humanitys-last-exam]] 15.9407%×0.3 |
| 추론 | 51.5 | +0.1 | 실측 | [[critpt]] 5.14286%×1.0, [[gpqa-diamond]] 76.0606%×1.0, [[humanitys-last-exam]] 15.9407%×1.0 |
| 코딩 | 54.8 | +0.32 | 실측 | [[terminal-bench]] 33.3333%×0.5 |
| 에이전트 | 52.5 | +0.16 | 실측 | [[tau2-bench]] 52.6316%×1.0, [[terminal-bench]] 33.3333%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 41.3 | -0.58 | 실측 | [[mmmu-pro]] 59.5376%×1.0 |
| 긴문맥 | 58.4 | +0.56 | 실측 | [[aa-lcr]] 67.3333%×1.0 |
| 지시 따르기 | 64.3 | +0.96 | 실측 | [[ifbench]] 64.4218%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
