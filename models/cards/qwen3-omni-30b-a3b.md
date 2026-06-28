---
type: Model
title: Qwen3 Omni 30B A3B
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.32
output_speed_tps: 95.0
context_window: 65500
radar:
  knowledge: { s: 33.3, z: -0.81, r: 37.9, estimated: false }  # 전문 지식
  reasoning: { s: 28.7, z: -0.74, r: 38.9, estimated: false }  # 추론
  coding: { s: 36.6, z: -0.98, r: 35.2, estimated: false }  # 코딩
  agentic: { s: 13.8, z: -1.48, r: 27.8, estimated: false }  # 에이전트
  trust: { s: 8.8, z: -0.88, r: 36.8, estimated: false }  # 신뢰성
  multimodal: { s: 58.6, z: -0.83, r: 37.5, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -2.53, r: 12.1, estimated: false }  # 긴문맥
  instruction: { s: 43.7, z: -0.97, r: 35.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 Omni 30B A3B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-06-28
timestamp: 2026-06-28T00:00:00Z
---

# Qwen3 Omni 30B A3B

Alibaba · Open · 컨텍스트 65k · 종합지능 **10.0**

## 강점 / 약점 (평균 대비)
- **강점**: 추론, 전문 지식
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.25 · 출력 $0.97 · 혼합 $0.32/1M · 95.0 t/s · TTFT 1.94s · 65k ctx` · 가성비 31.2

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 37.9 | -0.81 | 실측 | [[aa-omniscience]] 15.0%×1.0, [[gpqa-diamond]] 73.0%×0.4, [[humanitys-last-exam]] 7.0%×0.3 |
| 추론 | 38.9 | -0.74 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 73.0%×1.0, [[humanitys-last-exam]] 7.0%×1.0 |
| 코딩 | 35.2 | -0.98 | 실측 | [[scicode]] 31.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 27.8 | -1.48 | 실측 | [[tau2-bench]] 21.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 36.8 | -0.88 | 실측 | [[aa-omniscience]] 11.0%×1.0 |
| 멀티모달 | 37.5 | -0.83 | 실측 | [[mmmu-pro]] 60.0%×1.0 |
| 긴문맥 | 12.1 | -2.53 | 실측 | [[aa-lcr]] 0.0%×1.0 |
| 지시 따르기 | 35.4 | -0.97 | 실측 | [[ifbench]] 43.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
