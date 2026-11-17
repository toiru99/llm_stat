---
type: Model
title: GPT-4.1
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.55
output_speed_tps: 103.00381233167616
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.3, z: -0.38, r: 44.4, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.6, r: 41.0, estimated: false }  # 추론
  coding: { s: 20.7, z: -0.65, r: 40.3, estimated: false }  # 코딩
  agentic: { s: 34.1, z: -0.36, r: 44.5, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 62.5, z: -0.45, r: 43.3, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.71, r: 60.6, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.43, r: 43.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-17
timestamp: 2026-11-17T00:00:00Z
---

# GPT-4.1

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 에이전트
- **약점**: 추론, 코딩

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $1.55/1M · 103.00381233167616 t/s · TTFT 4.174178927331474s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 44.4 | -0.38 | 실측 | [[gpqa-diamond]] 66.5656565656566%×0.4, [[humanitys-last-exam]] 4.18%×0.3 |
| 추론 | 41.0 | -0.6 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 66.5656565656566%×1.0, [[humanitys-last-exam]] 4.18%×1.0 |
| 코딩 | 40.3 | -0.65 | 실측 | [[terminal-bench]] 13.6363636363636%×0.5 |
| 에이전트 | 44.5 | -0.36 | 실측 | [[tau2-bench]] 47.076023391812896%×1.0, [[terminal-bench]] 13.6363636363636%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.3 | -0.45 | 실측 | [[mmmu-pro]] 61.2138728323699%×1.0 |
| 긴문맥 | 60.6 | +0.71 | 실측 | [[aa-lcr]] 68.3333333333333%×1.0 |
| 지시 따르기 | 43.5 | -0.43 | 실측 | [[ifbench]] 42.9931972789116%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
