---
type: Model
title: GPT-4.1
creator: OpenAI
license: Proprietary
intelligence_index: None
price_blended_usd_1m: 1.55
output_speed_tps: 101.959741726347
context_window: 1000000
status: past
size_class: Unknown
params_b: null
is_reasoning: false
radar:
  knowledge: { s: 39.3, z: -0.36, r: 44.6, estimated: false }  # 전문 지식
  reasoning: { s: 23.3, z: -0.59, r: 41.2, estimated: false }  # 추론
  coding: { s: 20.7, z: -0.69, r: 39.7, estimated: false }  # 코딩
  agentic: { s: 34.1, z: -0.46, r: 43.1, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: 62.3, z: -0.46, r: 43.0, estimated: false }  # 멀티모달
  long_context: { s: 77.1, z: 0.59, r: 58.9, estimated: false }  # 긴문맥
  instruction: { s: 43.4, z: -0.29, r: 45.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — GPT-4.1
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-24
timestamp: 2026-11-24T00:00:00Z
---

# GPT-4.1

OpenAI · Proprietary · Unknown · 컨텍스트 1M · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 코딩

## 실용 지표
`입력 $2.0 · 출력 $8.0 · 혼합 $1.55/1M · 101.959741726347 t/s · TTFT 1.72198339255186s · 1M ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 44.6 | -0.36 | 실측 | [[gpqa-diamond]] 66.5657%×0.4, [[humanitys-last-exam]] 4.18%×0.3 |
| 추론 | 41.2 | -0.59 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 66.5657%×1.0, [[humanitys-last-exam]] 4.18%×1.0 |
| 코딩 | 39.7 | -0.69 | 실측 | [[terminal-bench]] 13.6364%×0.5 |
| 에이전트 | 43.1 | -0.46 | 실측 | [[tau2-bench]] 47.076%×1.0, [[terminal-bench]] 13.6364%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | 43.0 | -0.46 | 실측 | [[mmmu-pro]] 61.2139%×1.0 |
| 긴문맥 | 58.9 | +0.59 | 실측 | [[aa-lcr]] 68.3333%×1.0 |
| 지시 따르기 | 45.6 | -0.29 | 실측 | [[ifbench]] 42.9932%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
