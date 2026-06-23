---
type: Model
title: gpt-oss-120b (low)
creator: OpenAI
license: Open
intelligence_index: 18.0
price_blended_usd_1m: 0.2
output_speed_tps: 350.0
context_window: 131000
radar:
  knowledge: { s: 31.9, z: -0.87, r: 36.9, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.92, r: 36.3, estimated: false }  # 추론
  coding: { s: 42.6, z: -0.72, r: 39.2, estimated: false }  # 코딩
  agentic: { s: 26.7, z: -1.0, r: 35.0, estimated: false }  # 에이전트
  trust: { s: 22.5, z: -0.4, r: 44.1, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 59.5, z: -0.4, r: 44.0, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: -0.09, r: 48.6, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-120b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# gpt-oss-120b (low)

OpenAI · Open · 컨텍스트 131k · 종합지능 **18.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 추론, 에이전트

## 실용 지표
`입력 $0.15 · 출력 $0.6 · 혼합 $0.2/1M · 350.0 t/s · TTFT 0.9s · 131k ctx` · 가성비 90.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 36.9 | -0.87 | 실측 | [[aa-omniscience]] 16.0%×1.0, [[gpqa-diamond]] 67.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 36.3 | -0.92 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 67.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 39.2 | -0.72 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 35.0 | -1.0 | 실측 | [[tau2-bench]] 45.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 44.1 | -0.4 | 실측 | [[aa-omniscience]] 22.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 44.0 | -0.4 | 실측 | [[aa-lcr]] 44.0%×1.0 |
| 지시 따르기 | 48.6 | -0.09 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
