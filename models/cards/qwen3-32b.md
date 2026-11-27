---
type: Model
title: Qwen3 32B
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.27
output_speed_tps: 27.4232421118622
context_window: 32768
status: past
size_class: Small
params_b: 32.8
is_reasoning: true
radar:
  knowledge: { s: 41.4, z: -0.26, r: 46.1, estimated: false }  # 전문 지식
  reasoning: { s: 25.1, z: -0.5, r: 42.5, estimated: false }  # 추론
  coding: { s: 33.4, z: -0.26, r: 46.1, estimated: false }  # 코딩
  agentic: { s: 16.1, z: -1.1, r: 33.6, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 34.0, z: -0.68, r: 39.7, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 32B
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 32B

Alibaba · Open · Small(32.8B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 코딩
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.24000000000000002 · 출력 $0.54 · 혼합 $0.27/1M · 27.4232421118622 t/s · TTFT 1.04541792123333s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 46.1 | -0.26 | 실측 | [[gpqa-diamond]] 66.7677%×0.4, [[humanitys-last-exam]] 7.41%×0.3 |
| 추론 | 42.5 | -0.5 | 실측 | [[critpt]] 0.285714%×1.0, [[gpqa-diamond]] 66.7677%×1.0, [[humanitys-last-exam]] 7.41%×1.0 |
| 코딩 | 46.1 | -0.26 | 실측 | [[scicode]] 35.9954%×1.0, [[terminal-bench]] 3.0303%×0.5 |
| 에이전트 | 33.6 | -1.1 | 실측 | [[gdpval]] 40.55 Elo×1.0, [[tau2-bench]] 29.8246%×1.0, [[tau3-banking]] 5.36082%×1.0, [[terminal-bench]] 3.0303%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 39.7 | -0.68 | 실측 | [[ifbench]] 36.3265%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
