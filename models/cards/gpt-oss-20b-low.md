---
type: Model
title: gpt-oss-20b (low)
creator: OpenAI
license: Open
intelligence_index: None
price_blended_usd_1m: 0.093
output_speed_tps: 113.127910326067
context_window: 131072
status: current
size_class: Small
params_b: null
is_reasoning: true
radar:
  knowledge: { s: 36.4, z: -0.53, r: 42.1, estimated: false }  # 전문 지식
  reasoning: { s: 21.7, z: -0.69, r: 39.7, estimated: false }  # 추론
  coding: { s: 6.9, z: -1.13, r: 33.1, estimated: false }  # 코딩
  agentic: { s: 28.8, z: -0.56, r: 41.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 35.0, z: -0.55, r: 41.7, estimated: false }  # 긴문맥
  instruction: { s: 64.2, z: 0.43, r: 56.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-23
timestamp: 2026-11-23T00:00:00Z
---

# gpt-oss-20b (low)

OpenAI · Open · Small · 컨텍스트 131k · 종합지능 **None**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 전문 지식
- **약점**: 추론, 코딩

## 실용 지표
`입력 $0.07 · 출력 $0.3 · 혼합 $0.093/1M · 113.127910326067 t/s · TTFT 1.25130538441761s · 131k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 42.1 | -0.53 | 실측 | [[gpqa-diamond]] 61.11111111111111%×0.4, [[humanitys-last-exam]] 5.28266913809083%×0.3 |
| 추론 | 39.7 | -0.69 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.11111111111111%×1.0, [[humanitys-last-exam]] 5.28266913809083%×1.0 |
| 코딩 | 33.1 | -1.13 | 실측 | [[terminal-bench]] 4.545454545454549%×0.5 |
| 에이전트 | 41.7 | -0.56 | 실측 | [[tau2-bench]] 50.2923976608187%×1.0, [[terminal-bench]] 4.545454545454549%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 41.7 | -0.55 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 56.5 | +0.43 | 실측 | [[ifbench]] 57.8231292517007%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
