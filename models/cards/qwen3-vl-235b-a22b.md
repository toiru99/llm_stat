---
type: Model
title: Qwen3 VL 235B A22B
creator: Alibaba
license: Open
intelligence_index: 21.0
price_blended_usd_1m: 0.91
output_speed_tps: 58.0
context_window: 262000
status: past
size_class: Large
params_b: 235
is_reasoning: false
radar:
  knowledge: { s: 41.4, z: 0.0, r: 50.0, estimated: false }  # 전문 지식
  reasoning: { s: 32.4, z: -0.12, r: 48.2, estimated: false }  # 추론
  coding: { s: 50.0, z: 0.11, r: 51.7, estimated: false }  # 코딩
  agentic: { s: 35.6, z: -0.01, r: 49.9, estimated: false }  # 에이전트
  trust: { s: 18.4, z: -0.47, r: 42.9, estimated: false }  # 신뢰성
  multimodal: { s: 77.1, z: 0.26, r: 53.9, estimated: false }  # 멀티모달
  long_context: { s: 77.6, z: 0.82, r: 62.4, estimated: false }  # 긴문맥
  instruction: { s: 62.0, z: 0.36, r: 55.4, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 235B A22B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-08-06
timestamp: 2026-08-06T00:00:00Z
---

# Qwen3 VL 235B A22B

Alibaba · Open · Large(235B) · 컨텍스트 262k · 종합지능 **21.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 지시 따르기
- **약점**: 추론, 신뢰성

## 실용 지표
`입력 $0.7 · 출력 $8.4 · 혼합 $0.91/1M · 58.0 t/s · TTFT 2.89s · 262k ctx` · 가성비 23.1

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 50.0 | +0.0 | 실측 | [[aa-omniscience]] 21.0%×1.0, [[gpqa-diamond]] 77.0%×0.4, [[humanitys-last-exam]] 10.0%×0.3 |
| 추론 | 48.2 | -0.12 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 77.0%×1.0, [[humanitys-last-exam]] 10.0%×1.0 |
| 코딩 | 51.7 | +0.11 | 실측 | [[scicode]] 40.0%×1.0, [[terminal-bench]] 11.0%×0.5 |
| 에이전트 | 49.9 | -0.01 | 실측 | [[tau2-bench]] 54.0%×1.0, [[terminal-bench]] 11.0%×1.0 |
| 신뢰성 | 42.9 | -0.47 | 실측 | [[aa-omniscience]] 17.0%×1.0 |
| 멀티모달 | 53.9 | +0.26 | 실측 | [[mmmu-pro]] 69.0%×1.0 |
| 긴문맥 | 62.4 | +0.82 | 실측 | [[aa-lcr]] 59.0%×1.0 |
| 지시 따르기 | 55.4 | +0.36 | 실측 | [[ifbench]] 56.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
