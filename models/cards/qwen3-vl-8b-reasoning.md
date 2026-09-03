---
type: Model
title: Qwen3 VL 8B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 10.0
price_blended_usd_1m: 0.372
output_speed_tps: 115.0
context_window: 256000
status: past
size_class: Small
params_b: 8.77
is_reasoning: true
radar:
  knowledge: { s: 31.8, z: -0.44, r: 43.5, estimated: false }  # 전문 지식
  reasoning: { s: 20.5, z: -0.7, r: 39.4, estimated: false }  # 추론
  coding: { s: 25.7, z: -0.9, r: 36.5, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.88, r: 36.7, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.82, r: 37.6, estimated: false }  # 신뢰성
  multimodal: { s: 59.2, z: -0.56, r: 41.6, estimated: false }  # 멀티모달
  long_context: { s: 44.6, z: -0.17, r: 47.4, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.57, r: 41.5, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-03
timestamp: 2026-09-03T00:00:00Z
---

# Qwen3 VL 8B (Reasoning)

Alibaba · Open · Small(8.77B) · 컨텍스트 256k · 종합지능 **10.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.18 · 출력 $2.1 · 혼합 $0.372/1M · 115.0 t/s · TTFT 2.39s · 256k ctx` · 가성비 26.9

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.5 | -0.44 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.4 | -0.7 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.5 | -0.9 | 실측 | [[scicode]] 22.0%×1.0, [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 36.7 | -0.88 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 37.6 | -0.82 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 41.6 | -0.56 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 47.4 | -0.17 | 실측 | [[aa-lcr]] 37.0%×1.0 |
| 지시 따르기 | 41.5 | -0.57 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
