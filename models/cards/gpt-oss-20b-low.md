---
type: Model
title: gpt-oss-20b (low)
creator: OpenAI
license: Open
intelligence_index: 14.0
price_blended_usd_1m: 0.07
output_speed_tps: 230.0
context_window: 131000
radar:
  knowledge: { s: 28.3, z: -1.24, r: 31.4, estimated: false }  # 전문 지식
  reasoning: { s: 22.6, z: -1.18, r: 32.3, estimated: false }  # 추론
  coding: { s: 40.3, z: -1.05, r: 34.2, estimated: false }  # 코딩
  agentic: { s: 29.0, z: -1.01, r: 34.9, estimated: false }  # 에이전트
  trust: { s: 11.2, z: -0.69, r: 39.6, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 41.9, z: -1.21, r: 31.9, estimated: false }  # 긴문맥
  instruction: { s: 64.8, z: -0.23, r: 46.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — gpt-oss-20b (low)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-07-10
timestamp: 2026-07-10T00:00:00Z
---

# gpt-oss-20b (low)

OpenAI · Open · 컨텍스트 131k · 종합지능 **14.0**

## 강점 / 약점 (평균 대비)
- **강점**: 지시 따르기, 신뢰성
- **약점**: 긴문맥, 전문 지식

## 실용 지표
`입력 $0.06 · 출력 $0.2 · 혼합 $0.07/1M · 230.0 t/s · TTFT 0.84s · 131k ctx` · 가성비 200.0

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 31.4 | -1.24 | 실측 | [[aa-omniscience]] 14.0%×1.0, [[gpqa-diamond]] 61.0%×0.4, [[humanitys-last-exam]] 5.0%×0.3 |
| 추론 | 32.3 | -1.18 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 61.0%×1.0, [[humanitys-last-exam]] 5.0%×1.0 |
| 코딩 | 34.2 | -1.05 | 실측 | [[scicode]] 34.0%×1.0, [[terminal-bench]] 5.0%×0.5 |
| 에이전트 | 34.9 | -1.01 | 실측 | [[tau2-bench]] 50.0%×1.0, [[terminal-bench]] 5.0%×1.0 |
| 신뢰성 | 39.6 | -0.69 | 실측 | [[aa-omniscience]] 13.0%×1.0 |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 31.9 | -1.21 | 실측 | [[aa-lcr]] 31.0%×1.0 |
| 지시 따르기 | 46.5 | -0.23 | 실측 | [[ifbench]] 58.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
