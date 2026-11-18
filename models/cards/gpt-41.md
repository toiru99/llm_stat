---
type: Model
title: GPT-4.1
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.55
output_speed_tps: 102.72758298068976
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.3, z: -0.39, r: 44.2, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.61, r: 40.9, estimated: false }  # 추론
  coding: { s: 20.7, z: -0.66, r: 40.2, estimated: false }  # 코딩
  agentic: { s: 34.1, z: -0.37, r: 44.4, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 62.3, z: -0.46, r: 43.0, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.7, r: 60.4, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.44, r: 43.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-18
timestamp: 2026-11-18T00:00:00Z
---

# GPT-4.1

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $1.55/1M · 102.72758298068976 t/s · TTFT 2.9706179963805845s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.2 | -0.39 | 실측 | [[gpqa-diamond]] 66.5656565656566%×0.4, [[humanitys-last-exam]] 4.18%×0.3 |
| 추론 | 40.9 | -0.61 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.5656565656566%×1.0, [[humanitys-last-exam]] 4.18%×1.0 |
| 코딩 | 40.2 | -0.66 | 실측 | [[terminal-bench]] 13.6363636363636%×0.5 |
| 에이전트 | 44.4 | -0.37 | 실측 | [[tau2-bench]] 47.076023391812896%×1.0, [[terminal-bench]] 13.6363636363636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.0 | -0.46 | 실측 | [[mmmu-pro]] 61.2138728323699%×1.0 |
| 긴문맥 | 60.4 | +0.7 | 실측 | [[aa-lcr]] 68.3333333333333%×1.0 |
| 지시 따르기 | 43.4 | -0.44 | 실측 | [[ifbench]] 42.9931972789116%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
