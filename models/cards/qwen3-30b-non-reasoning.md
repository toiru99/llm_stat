---
type: Model
title: Qwen3 30B (non-reasoning)
creator: Alibaba
license: Open
intelligence_index: None
price_blended_usd_1m: 0.158
output_speed_tps: 86.3819790118212
context_window: 32768
status: past
size_class: Small
params_b: 30.5
is_reasoning: false
radar:
  knowledge: { s: 29.6, z: -0.83, r: 37.5, estimated: false }  # 전문 지식
  reasoning: { s: 17.7, z: -0.87, r: 37.0, estimated: false }  # 추론
  coding: { s: 10.3, z: -1.04, r: 34.5, estimated: false }  # 코딩
  agentic: { s: 16.4, z: -1.08, r: 33.7, estimated: false }  # 에이전트
  trust: { s: null, z: null, r: null, estimated: false }  # 신뢰성
  multimodal: { s: null, z: null, r: null, estimated: false }  # 멀티모달
  long_context: { s: 0.0, z: -1.77, r: 23.5, estimated: false }  # 긴문맥
  instruction: { s: 27.8, z: -0.94, r: 35.9, estimated: false }  # 지시 따르기
sources:
  - type: leaderboard
    title: Artificial Analysis — Qwen3 30B (non-reasoning)
    url: https://artificialanalysis.ai/leaderboards/models
updated: 2026-11-27
timestamp: 2026-11-27T00:00:00Z
---

# Qwen3 30B (non-reasoning)

Alibaba · Open · Small(30.5B) · 컨텍스트 32k · 종합지능 **None** · ⚠️ past(구세대)

## 강점 / 약점 (평균 대비)
- **강점**: 전문 지식, 추론
- **약점**: 에이전트, 긴문맥

## 실용 지표
`입력 $0.12 · 출력 $0.5 · 혼합 $0.158/1M · 86.3819790118212 t/s · TTFT 0.344013441977733s · 32k ctx`

## 레이더 8축 (평균=50 기준선)

| 축 | 점수(r) | 평균대비(z) | 상태 | 구성 벤치마크(원점수) |
|---|---|---|---|---|
| 전문 지식 | 37.5 | -0.83 | 실측 | [[gpqa-diamond]] 51.5152%×0.4, [[humanitys-last-exam]] 4.6%×0.3 |
| 추론 | 37.0 | -0.87 | 실측 | [[critpt]] 0%×1.0, [[gpqa-diamond]] 51.5152%×1.0, [[humanitys-last-exam]] 4.6%×1.0 |
| 코딩 | 34.5 | -1.04 | 실측 | [[terminal-bench]] 6.81818%×0.5 |
| 에이전트 | 33.7 | -1.08 | 실측 | [[tau2-bench]] 22.2222%×1.0, [[terminal-bench]] 6.81818%×1.0 |
| 신뢰성 | — | — | 측정 안 됨 | — |
| 멀티모달 | — | — | 측정 안 됨 | — |
| 긴문맥 | 23.5 | -1.77 | 실측 | [[aa-lcr]] 0%×1.0 |
| 지시 따르기 | 35.9 | -0.94 | 실측 | [[ifbench]] 31.9048%×1.0 |

> 구형 8축에서 r=50은 해당 축 실측 모델의 평균입니다. 측정값이 없는 축은 비웁니다.

## 출처
출처: [artificialanalysis.ai](https://artificialanalysis.ai/leaderboards/models)
