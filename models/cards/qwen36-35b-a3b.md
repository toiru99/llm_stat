---
type: Model
title: Qwen3.6 35B A3B
creator: Alibaba
license: Open
intelligence_index: 32.0
price_blended_usd_1m: 0.37
output_speed_tps: 178.0
context_window: 262000
radar:
  knowledge: { s: 44.8, z: -0.29, r: 45.6, estimated: false }  # 전문 지식
  reasoning: { s: 41.5, z: -0.14, r: 47.9, estimated: false }  # 추론
  coding: { s: 58.5, z: -0.04, r: 49.4, estimated: false }  # 코딩
  agentic: { s: 51.6, z: -0.01, r: 49.8, estimated: false }  # 에이전트
  trust: { s: 57.5, z: 0.84, r: 62.5, estimated: false }  # 신뢰성
  multimodal: { s: 84.5, z: 0.49, r: 57.3, estimated: false }  # 멀티모달
  long_context: { s: 86.5, z: 0.57, r: 58.5, estimated: false }  # 긴문맥
  instruction: { s: 73.2, z: 0.26, r: 53.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3.6 35B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-23
timestamp: 2026-06-23T00:00:00Z
---

# Qwen3.6 35B A3B

Alibaba · Open · 컨텍스트 262k · 종합지능 **32.0**

## 강점 / 약점 (평균 대비)
- **강점**: 신뢰성, 긴문맥
- **약점**: 추론, 전문 지식

## 실용 지표
`입력 $0.25 · 출력 $1.49 · 혼합 $0.37/1M · 178.0 t/s · TTFT 2.33s · 262k ctx` · 가성비 86.5

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 45.6 | -0.29 | 실측 | [[aa-omniscience]] 19.0%×1.0, [[gpqa-diamond]] 84.0%×0.4, [[humanitys-last-exam]] 20.0%×0.3 |
| 추론 | 47.9 | -0.14 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 84.0%×1.0, [[humanitys-last-exam]] 20.0%×1.0 |
| 코딩 | 49.4 | -0.04 | 실측 | [[scicode]] 36.0%×1.0, [[terminal-bench]] 35.0%×0.5 |
| 에이전트 | 49.8 | -0.01 | 실측 | [[gdpval]] 28.0%×1.0, [[tau2-bench]] 95.0%×1.0, [[tau3-banking]] 9.0%×1.0, [[terminal-bench]] 35.0%×1.0 |
| 신뢰성 | 62.5 | +0.84 | 실측 | [[aa-omniscience]] 50.0%×1.0 |
| 멀티모달 | 57.3 | +0.49 | 실측 | [[mmmu-pro]] 75.0%×1.0 |
| 긴문맥 | 58.5 | +0.57 | 실측 | [[aa-lcr]] 64.0%×1.0 |
| 지시 따르기 | 53.9 | +0.26 | 실측 | [[ifbench]] 64.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
