---
type: Model
title: Qwen3 VL 8B (Reasoning)
creator: Alibaba
license: Open
intelligence_index: 5.0
price_blended_usd_1m: 0.372
output_speed_tps: 113.0
context_window: 256000
status: past
size_class: Small
params_b: 8.77
is_reasoning: true
radar:
  knowledge: { s: 31.6, z: -0.45, r: 43.3, estimated: false }  # 전문 지식
  reasoning: { s: 20.3, z: -0.71, r: 39.4, estimated: false }  # 추론
  coding: { s: 6.1, z: -0.91, r: 36.3, estimated: false }  # 코딩
  agentic: { s: 14.6, z: -0.87, r: 36.9, estimated: false }  # 에이전트
  trust: { s: 7.2, z: -0.81, r: 37.8, estimated: false }  # 신뢰성
  multimodal: { s: 58.3, z: -0.59, r: 41.2, estimated: false }  # 멀티모달
  long_context: { s: 37.1, z: -0.37, r: 44.5, estimated: false }  # 긴문맥
  instruction: { s: 39.4, z: -0.55, r: 41.8, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 VL 8B (Reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-09-05
timestamp: 2026-09-05T00:00:00Z
---

# Qwen3 VL 8B (Reasoning)

Alibaba · Open · Small(8.77B) · 컨텍스트 256k · 종합지능 **5.0** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 긴문맥, 전문 지식
- **약점**: 에이전트, 코딩

## 실용 지표
`입력 $0.18 · 출력 $2.1 · 혼합 $0.372/1M · 113.0 t/s · TTFT 2.38s · 256k ctx` · 가성비 13.4

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(raw%) |
|---|---|---|---|---|
| 전문 지식 | 43.3 | -0.45 | 실측 | [[aa-omniscience]] 20.0%×1.0, [[gpqa-diamond]] 58.0%×0.4, [[humanitys-last-exam]] 4.0%×0.3 |
| 추론 | 39.4 | -0.71 | 실측 | [[critpt]] 0.0%×1.0, [[gpqa-diamond]] 58.0%×1.0, [[humanitys-last-exam]] 4.0%×1.0 |
| 코딩 | 36.3 | -0.91 | 실측 | [[terminal-bench]] 4.0%×0.5 |
| 에이전트 | 36.9 | -0.87 | 실측 | [[tau2-bench]] 23.0%×1.0, [[terminal-bench]] 4.0%×1.0 |
| 신뢰성 | 37.8 | -0.81 | 실측 | [[aa-omniscience]] 9.0%×1.0 |
| 멀티모달 | 41.2 | -0.59 | 실측 | [[mmmu-pro]] 57.0%×1.0 |
| 긴문맥 | 44.5 | -0.37 | 실측 | [[aa-lcr]] 33.0%×1.0 |
| 지시 따르기 | 41.8 | -0.55 | 실측 | [[ifbench]] 40.0%×1.0 |

> r=50이 추적 모델 평균. 50 초과=평균 이상. '추정'=같은 축 결측을 kNN으로 보완. '측정 안 됨'=미측정(추정 보류).

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
